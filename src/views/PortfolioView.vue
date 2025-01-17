<script setup lang="ts">
import PortfolioItem from "@/components/PortfolioItem.vue";
</script>

<template>
    <div class="team">
        <hr />
        <div class="profiles_list">
            <PortfolioItem name="Chess Bot + Engine" src="/portfolio/chess/preview.jpg" href="/portfolio">
                <p>A chess engine written in C++ with an API interface written in Python. This implements the minimax algorithm with alpha-beta pruning.</p>
            </PortfolioItem>
            <PortfolioItem name="Formula SAE BSPD" src="/portfolio/bspd/preview.jpg" href="/portfolio">
                <p>A hardware based detector of stuck throttle conditions in electric and combustion vehicles.</p>
            </PortfolioItem>
            <PortfolioItem name="Segment Monitoring Unit" src="/products/preview.png" href="/portfolio">
                <p>This device monitors temperatures up to 56 temperatures in a ~120V battery module.</p>
            </PortfolioItem>
            <PortfolioItem name="Vehicle Control Unit" src="/portfolio/vcu/preview.jpg" href="/portfolio">
                <p>This device controlled various devices on Gryphon Racing's Electric Vehicle, including: motor torque, pump speed & monitoring of IMD & BMS statuses.</p>
            </PortfolioItem>
            <PortfolioItem name="Electric Vehicle Dashboard" src="/products/preview.png" href="/portfolio">
                <p>This dashboard displayed various critical parameters and enabled on-the-fly tuning of the primary vehicle parameters.</p>
            </PortfolioItem>
            <PortfolioItem name="Blended Braking Module" src="/products/preview.png" href="/portfolio">
                <p>A module that blends braking between hydraulic and regenerative braking in 2WD electric vehicles.</p>
                <p>(Currently in Development)</p>
            </PortfolioItem>
        </div>
        <hr />
    </div>
</template>

<style scoped>
.team {
    background-color: var(--gryphon-white);
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-light-black);
    flex-grow: 1;
}

h1 {
    text-align: center;
    font-size: 5vw;
    font-weight: bolder;
    margin: 0;
}

hr {
    border: 0;
    clear: both;
    display: block;
    width: 99%;
    background: linear-gradient(to right, var(--gryphon-white) 5%, var(--gryphon-black) 50%, var(--gryphon-white) 95%);
    height: 3px;
    border-radius: 50px;
}

h2 {
    text-align: center;
    margin: 0;
}

a {
    text-decoration: none;
}

.profiles_list {
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;
}

.profiles_list > * {
    margin: 0.5em;
}
</style>
