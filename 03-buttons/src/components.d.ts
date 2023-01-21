/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface CursorPreview {
        "type": EntityType;
    }
    interface SimpleButton {
        "customStyles": {
    [key: string]: string | undefined;
  };
        "type": EntityType;
        "variant": EntityVariant;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCursorPreviewElement extends Components.CursorPreview, HTMLStencilElement {
    }
    var HTMLCursorPreviewElement: {
        prototype: HTMLCursorPreviewElement;
        new (): HTMLCursorPreviewElement;
    };
    interface HTMLSimpleButtonElement extends Components.SimpleButton, HTMLStencilElement {
    }
    var HTMLSimpleButtonElement: {
        prototype: HTMLSimpleButtonElement;
        new (): HTMLSimpleButtonElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "cursor-preview": HTMLCursorPreviewElement;
        "simple-button": HTMLSimpleButtonElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface CursorPreview {
        "type"?: EntityType;
    }
    interface SimpleButton {
        "customStyles"?: {
    [key: string]: string | undefined;
  };
        "type"?: EntityType;
        "variant"?: EntityVariant;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "cursor-preview": CursorPreview;
        "simple-button": SimpleButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "cursor-preview": LocalJSX.CursorPreview & JSXBase.HTMLAttributes<HTMLCursorPreviewElement>;
            "simple-button": LocalJSX.SimpleButton & JSXBase.HTMLAttributes<HTMLSimpleButtonElement>;
        }
    }
}
