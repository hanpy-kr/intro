export type FallbackProps = {
  error: Error;
  resetErrorBoundary: (...args: any[]) => void;
};

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
};
type RenderFallbackType = <ErrorType extends Error>(
  props: RenderFallbackProps<ErrorType>
) => React.ReactNode;

type ErrorBoundarySharedProps = {
  onError?: (error: Error, info: { componentStack: string }) => void;
  onReset?: (
    details:
      | { reason: "imperative-api"; args: any[] }
      | { reason: "keys"; prev: any[] | undefined; next: any[] | undefined }
  ) => void;
  resetKeys?: any[];
};

interface ErrorBoundaryPropsWithRender extends ErrorBoundarySharedProps {
  fallback?: never;
  FallbackComponent?: never;
  fallbackRender: RenderFallbackType;
}

export type ErrorBoundaryProps = ErrorBoundaryPropsWithRender;
