import { useEffect, useRef } from 'react';
import ProgressBar from 'progressbar.js';

export function LoadingBar() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const bar = new ProgressBar.Line(containerRef.current, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '##E8FF00',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: { width: '100%', height: '100%' },
            text: {
                style: {
                    color: '#999',
                    position: 'absolute',
                    right: '0',
                    top: '30px',
                    padding: 0,
                    margin: 0,
                    transform: null,
                },
                autoStyleContainer: false,
            },
            from: { color: '#E8FF00' },
            to: { color: '#ED6A5A' },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            step: (_state: Record<string, unknown>, bar: any) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            },
        });

        bar.animate(1.0);

        return () => bar.destroy();
    }, []);

    return <div ref={containerRef} style={{ height: '4px', position: 'relative' }} />;
}