import { Component, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorKey: number;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorKey: 0 };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true, errorKey: 0 };
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
                onClick={() => this.setState((prev) => ({ hasError: false, errorKey: prev.errorKey + 1 }))}
                className="text-metadata text-accent hover:underline"
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return <div key={this.state.errorKey}>{this.props.children}</div>;
  }
}
