import React from 'react';

import cx from 'classnames';

const ratio = Math.sqrt(3) / 2;

const Hex = ({ className, size = 100 }) => {
    function hexPoints(size) {
        let x = size;
        let y = size;

        const points = [];

        for (let i = 0; i < 7; i++) {
            points.push({
                x: x + size * Math.sin((i * 2 * Math.PI) / 6),
                y: y + size * Math.cos((i * 2 * Math.PI) / 6)
            });
        }

        return points.map(p => `${p.x},${p.y}`).join(' ');
    }
    return (
        <div className={cx('Hex', className)}>
            <svg
                width={size}
                height={size}
                style={{
                    position: 'relative',
                    left: -(size - size * ratio) * 0.5
                }}
            >
                <polyline className="border" points={hexPoints(size / 2)} />
                <polyline
                    className="fill"
                    points={hexPoints((size / 2) * 0.8)}
                />
            </svg>
        </div>
    );
};

export default Hex;
