import { Span } from '@opentelemetry/api';
export declare class TraceService {
    getTracer(): any;
    getSpan(): Span;
    startSpan(name: string): Span;
}
