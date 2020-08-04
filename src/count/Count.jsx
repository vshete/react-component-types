import React from 'react';
import Hook from '../hook/Hook';

export default function Count() {
    let count = Hook();

    return (
        <div>
            <div>You clicked {count} times</div>
            <button id="trigger">
                Click me
            </button>
        </div>
    );
}