import React from 'react';

export default function FlexSection() {
    return (
        <div>
            <div class="text-5xl font-extrabold ...">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Hello world
                </span>
            </div>
            <div class="flex flex-nowrap">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>
        </div>
    );
}
