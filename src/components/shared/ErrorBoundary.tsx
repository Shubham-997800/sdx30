import { Component, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex min-h-[400px] items-center justify-center p-8">
            <div className="text-center space-y-4">
              <p className="text-h3 text-foreground">Something went wrong</p>
              <p className="text-body text-muted-foreground">
                An unexpected error occurred. Please try again.
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="text-metadata text-accent hover:underline"
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
