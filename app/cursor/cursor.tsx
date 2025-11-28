"use client";

import { useEffect, useRef } from "react";

export default function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    let config = {
      TEXTURE_DOWNSAMPLE: 1,
      DENSITY_DISSIPATION: 0.98,
      VELOCITY_DISSIPATION: 0.99,
      PRESSURE_DISSIPATION: 0.8,
      PRESSURE_ITERATIONS: 25,
      CURL: 28,
      SPLAT_RADIUS: 0.004,
    };

    let pointers: any[] = [];
    let splatStack: any[] = [];

    const { gl, ext } = getWebGLContext(canvas);
    if (!gl) return;

    function getWebGLContext(canvas: HTMLCanvasElement) {
      const params: WebGLContextAttributes = {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false,
        premultipliedAlpha: false,
        preserveDrawingBuffer: false,
      };

      // WebGL1 | WebGL2 type union
      let gl: WebGLRenderingContext | WebGL2RenderingContext | null =
        canvas.getContext("webgl2", params) as WebGL2RenderingContext | null;

      const isWebGL2 = !!gl && gl instanceof WebGL2RenderingContext;

      if (!isWebGL2) {
        gl =
          (canvas.getContext("webgl", params) as WebGLRenderingContext | null) ||
          (canvas.getContext("experimental-webgl", params) as WebGLRenderingContext | null);
      }

      if (!gl) return { gl: null, ext: null };

      let halfFloat: any = null;
      let supportLinearFiltering: any = null;

      if (gl instanceof WebGL2RenderingContext) {
        gl.getExtension("EXT_color_buffer_float");
        supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
      } else {
        halfFloat = gl.getExtension("OES_texture_half_float");
        supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
      }

      // Clear canvas
      gl.clearColor(0, 0, 0, 1);

      const halfFloatTexType =
        gl instanceof WebGL2RenderingContext ? gl.HALF_FLOAT : halfFloat?.HALF_FLOAT_OES;

      const formatRGBA = getSupportedFormat(
        gl,
        (gl as any).RGBA16F ?? gl.RGBA,
        gl.RGBA,
        halfFloatTexType
      );
      const formatRG = getSupportedFormat(
        gl,
        (gl as any).RG16F ?? gl.RGBA,
        (gl as any).RG ?? gl.RGBA,
        halfFloatTexType
      );
      const formatR = getSupportedFormat(
        gl,
        (gl as any).R16F ?? gl.RGBA,
        (gl as any).RED ?? gl.RGBA,
        halfFloatTexType
      );

      return {
        gl,
        ext: {
          formatRGBA,
          formatRG,
          formatR,
          halfFloatTexType,
          supportLinearFiltering,
        },
      };
    }

    function getSupportedFormat(
      gl: WebGLRenderingContext,
      internalFormat: any,
      format: any,
      type: any
    ) {
      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        switch (internalFormat) {
          case (gl as any).R16F:
            return getSupportedFormat(gl, (gl as any).RG16F, (gl as any).RG, type);
          case (gl as any).RG16F:
            return getSupportedFormat(gl, (gl as any).RGBA16F, (gl as any).RGBA, type);
          default:
            return null;
        }
      }
      return { internalFormat, format };
    }

    function supportRenderTextureFormat(
      gl: WebGLRenderingContext,
      internalFormat: any,
      format: any,
      type: any
    ) {
      const texture = gl.createTexture();
      if (!texture) return false;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

      const fbo = gl.createFramebuffer();
      if (!fbo) return false;
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
      gl.deleteFramebuffer(fbo);
      gl.deleteTexture(texture);
      return status === gl.FRAMEBUFFER_COMPLETE;
    }

    function pointerPrototype(this: any) {
      this.id = -1;
      this.x = 0;
      this.y = 0;
      this.dx = 0;
      this.dy = 0;
      this.down = false;
      this.moved = false;
      this.color = [30, 0, 300];
    }

    pointers.push(new (pointerPrototype as any)());

    // Temporary draw to check canvas
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

/* globals.css
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent !important;
}
canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
*/
