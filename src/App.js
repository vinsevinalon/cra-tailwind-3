import React from 'react';
import FlexSection from './sections/FlexSection';

export default function App() {
    return (
        <div className="min-h-screen grid place-items-center">
            <article className="prose lg:prose-xl">
                <h1>Garlicccc bread with cheese: What the science tells us</h1>
                <p>
                    For years parents have espoused the health benefits of
                    eating garlic bread with cheese to their children, with the
                    food earning such an iconic status in our culture that kids
                    will often dress up as warm, cheesy loaf for Halloween.
                </p>
                <p>
                    But a recent study shows that the celebrated appetizer may
                    be linked to a series of rabies cases springing up around
                    the country.
                </p>
                <div class="flex ...">
                    <div class="w-1/2 ... ">
                        <button class="... ring-2 ring-blue-500">
                            Create account
                        </button>
                    </div>
                    <div class="w-1/2 ... ">w-1/2</div>
                    <div class="w-1/2 ... ">w-1/2</div>
                    <div class="w-1/2 ... ">w-1/2</div>
                    <div class="w-1/2 ... ">w-1/2</div>
                    <div class="w-1/2 ... ">w-1/2</div>
                    <div class="w-1/2 ... ">w-1/2</div>
                    <div class="w-1/2 ... ">w-1/2</div>
                </div>
            </article>
            <FlexSection />
        </div>
    );
}
