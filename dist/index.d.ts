import * as react from 'react';
import { CSSProperties } from 'react';
import * as goober from 'goober';
export { extractCss } from 'goober';

declare type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom';
declare type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
declare type Renderable = JSX.Element | string | null;
interface IconTheme {
    primary: string;
    secondary: string;
}
declare type ValueFunction<TValue, TArg> = (arg: TArg) => TValue;
declare type ValueOrFunction<TValue, TArg> = TValue | ValueFunction<TValue, TArg>;
declare const resolveValue: <TValue, TArg>(valOrFunction: ValueOrFunction<TValue, TArg>, arg: TArg) => TValue;
interface Toast {
    type: ToastType;
    id: string;
    message: ValueOrFunction<Renderable, Toast>;
    icon?: Renderable;
    duration?: number;
    pauseDuration: number;
    position?: ToastPosition;
    ariaProps: {
        role: 'status' | 'alert';
        'aria-live': 'assertive' | 'off' | 'polite';
    };
    style?: CSSProperties;
    className?: string;
    iconTheme?: IconTheme;
    createdAt: number;
    visible: boolean;
    height?: number;
}
declare type ToastOptions = Partial<Pick<Toast, 'id' | 'icon' | 'duration' | 'ariaProps' | 'className' | 'style' | 'position' | 'iconTheme'>>;
declare type DefaultToastOptions = ToastOptions & {
    [key in ToastType]?: ToastOptions;
};
interface ToasterProps {
    position?: ToastPosition;
    toastOptions?: DefaultToastOptions;
    reverseOrder?: boolean;
    gutter?: number;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    children?: (toast: Toast) => JSX.Element;
}

declare type Message = ValueOrFunction<Renderable, Toast>;
declare type ToastHandler = (message: Message, options?: ToastOptions) => string;
declare const toast: {
    (message: Message, opts?: ToastOptions): string;
    error: ToastHandler;
    success: ToastHandler;
    loading: ToastHandler;
    custom: ToastHandler;
    dismiss(toastId?: string): void;
    remove(toastId?: string): void;
    promise<T>(promise: Promise<T>, msgs: {
        loading: Renderable;
        success: ValueOrFunction<Renderable, T>;
        error: ValueOrFunction<Renderable, any>;
    }, opts?: DefaultToastOptions): Promise<T>;
};

declare const useToaster: (toastOptions?: DefaultToastOptions) => {
    toasts: Toast[];
    handlers: {
        startPause: () => void;
        endPause: () => void;
        updateHeight: (toastId: string, height: number) => void;
        calculateOffset: (toast: Toast, opts?: {
            reverseOrder?: boolean;
            gutter?: number;
            defaultPosition?: ToastPosition;
        }) => number;
    };
};

interface State {
    toasts: Toast[];
    pausedAt: number | undefined;
}
declare const useStore: (toastOptions?: DefaultToastOptions) => State;

declare const bindCssTarget: (target: Element) => void;

interface ToastBarProps {
    toast: Toast;
    position?: ToastPosition;
    style?: react.CSSProperties;
    children?: (components: {
        icon: Renderable;
        message: Renderable;
    }) => Renderable;
}
declare const ToastBar: react.FC<ToastBarProps>;

interface ErrorTheme {
    primary?: string;
    secondary?: string;
}
declare const ErrorIcon: goober.StyledVNode<Omit<react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement> & goober.DefaultTheme & ErrorTheme, never>>;

interface LoaderTheme {
    primary?: string;
    secondary?: string;
}
declare const LoaderIcon: goober.StyledVNode<Omit<react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement> & goober.DefaultTheme & LoaderTheme, never>>;

interface CheckmarkTheme {
    primary?: string;
    secondary?: string;
}
declare const CheckmarkIcon: goober.StyledVNode<Omit<react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement> & goober.DefaultTheme & CheckmarkTheme, never>>;

declare const ToastIcon: react.FC<{
    toast: Toast;
}>;

declare const Toaster: react.FC<ToasterProps>;

export { CheckmarkIcon, DefaultToastOptions, ErrorIcon, IconTheme, LoaderIcon, Renderable, Toast, ToastBar, ToastIcon, ToastOptions, ToastPosition, ToastType, Toaster, ToasterProps, ValueFunction, ValueOrFunction, bindCssTarget, toast as default, resolveValue, toast, useToaster, useStore as useToasterStore };
