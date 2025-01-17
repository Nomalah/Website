<template>
    <div class="root">
        <div class="shop_info">
            <div class="info">
                <h1 class="mt-5">About Me:</h1>
                <p class="lead">I'm a university student living in Kitchener, Ontario, Canada. I am studying computer engineering, and tinker in my free time.</p>
                <p>
                    You can follow me on <a href="https://github.com/Nomalah">GitHub</a>, You may also send me an email at
                    <a href="mailto:contact@dallashart.com">contact@dallashart.com</a>
                </p>
                <p>My interest in computer science & engineering is quite broad. Here are some of the skills I have learned:</p>
                <ul>
                    <li>Front-end web development using HTML, CSS, and Javascript</li>
                    <li>
                        Back-end web development in Javascript & Typescript using <a href="https://playerio.com" class="text-dark"><u>Node.js</u></a> and
                        <a href="https://playerio.com" class="text-dark"><u>Meteor</u></a>
                    </li>
                    <li>
                        Browser rendering with <a href="https://playerio.com" class="text-dark"><u>p5.js</u></a> and <a href="https://playerio.com" class="text-dark"><u>phaserjs</u></a>
                    </li>
                    <li>
                        Server hosting on <a href="https://playerio.com" class="text-dark"><u>PlayerIO</u></a>
                    </li>
                    <li>Competitive programming in C++, Python, and Javascript</li>
                    <li>Creating gradient descent and neuroevolution machine learning applications</li>
                    <li>Custom game AI, designed using minimax and alpha beta pruning</li>
                    <li>
                        Version control using Git and group collaboration using <a href="https://github.com" class="text-dark"><u>GitHub</u></a>
                    </li>
                </ul>
                <p>You can check out some of the projects I've created on my <a href="/portfolio">portfolio</a>.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.root {
    width: 100%;
    background-color: var(--gryphon-white);
}

.shop_info {
    position: relative;
    justify-content: center;
    line-height: 250%;
    display: flex;
    padding: 15vh 15% 10vh;

    color: var(--gryphon-light-black);
}

.map {
    background: url(/media/maps_loading.webp);
    background-size: cover;
    border-radius: 2em;
    overflow: hidden;
    border: 0;

    margin-left: 6em;
    margin-top: auto;
    margin-bottom: auto;

    width: 50%;
    height: 30vw;
}

.info {
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;
}

.shop_info p {
    font-size: 2em;
}

.shop_info h1 {
    font-size: 4em;
    line-height: 1em;
}

h2 {
    margin: 0;
    font-size: 2em;
    text-align: center;
    color: var(--gryphon-red);
}

.links-wrapper {
    padding-right: 1em;
    padding-left: 1em;
    padding-bottom: 4em;
    max-width: 420px;
    margin-top: 4em;
    margin-left: auto;
    margin-right: auto;
}

hr {
    border: 0;
    clear: both;
    display: block;
    width: 99%;
    background: linear-gradient(to right, var(--gryphon-red) 0%, var(--gryphon-white) 100%);
    height: 3px;
    border-radius: 50px;
}

@media screen and (max-width: 1500px) {
    .shop_info p {
        font-size: 1.5em;
        line-height: 1.8rem;
    }

    .shop_info h1 {
        font-size: 2.2em;
    }
}

@media screen and (max-width: 1000px) {
    .shop_info {
        flex-direction: column;
        align-items: center;
        padding: 10vh 15% 10vh;
    }

    .map {
        margin-left: 0;
        width: 100%;
        height: 60vw;
    }

    .info {
        text-align: center;
        width: 80vw;
    }
}
</style>
