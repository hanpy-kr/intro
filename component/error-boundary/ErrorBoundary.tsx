/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ErrorInfo } from "react";

import { ErrorBoundaryProps, FallbackProps } from "./types";

type ErrorBoundaryState = {
  didCatch: boolean;
  error: Error | null;
};

const initialState: ErrorBoundaryState = {
  didCatch: false,
  error: null,
};

class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo) {
    return { didCatch: true, error };
  }

  resetErrorBoundary = (...args: any[]) => {
    const { error } = this.state;

    if (error !== null) {
      alert("ErrorBoundary 걸림");
      this.setState(initialState);
    }
  };

  render() {
    const { children, fallbackRender, fallback, FallbackComponent } =
      this.props;
    const { didCatch, error } = this.state;
    let childToRender = children;

    if (didCatch && error) {
      const props: FallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };
      if (typeof fallbackRender === "function") {
        childToRender = fallbackRender(props);
      } else {
        throw new Error(
          "error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop"
        );
      }
    }

    return childToRender;
  }
}

export default ErrorBoundary;
