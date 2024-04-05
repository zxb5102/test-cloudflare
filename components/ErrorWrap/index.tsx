import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  //   static getDerivedStateFromError(error) {
  //     return { hasError: true };
  //   }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    // 可以在这里记录错误信息，比如发送错误日志到服务器
    console.error(error, errorInfo);
  }

  render() {
    // if ((this.state as any).hasError) {
    //   return <h1>Something went wrong.</h1>;
    // }

    return (this.props as any).children;
  }
}

export default ErrorBoundary;
