<script setup lang="ts">
// import NavFooter from "@/components/NavFooter.vue";
</script>

<template>
    <div class="landing_page_image">
        <div class="floating_scroll_body">
            <!-- <div class="additional_info">
                <div class="about_us">
                    <h1>About Us</h1>
                    <hr />
                    <p>
                        At Race Ready Modules, we are dedicated to empowering the next generation of engineers and innovators in the world of Formula Student competitions, including FSAE, FSUK, and
                        FSG. We specialize in designing and delivering high-performance modules tailored for the unique challenges faced by teams competing in these prestigious events.
                    </p>
                    <p>
                        For our partner teams, we go even further by offering in-depth technical support, personalized guidance, and a collaborative approach to innovation. Whether it's
                        troubleshooting, optimizing system integration, or providing insights into advanced engineering techniques, we are committed to your success.
                    </p>
                </div>
            </div> -->
            <!-- <NavFooter></NavFooter> -->
        </div>
    </div>
</template>

<style scoped>
.landing_page_image {
    width: 100%;
    height: 100%;

    /* The image used */
    background-image: url("/media/autocross_grc19.webp");

    /* Set a specific height */
    min-height: 100vh;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.additional_info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--gryphon-white);
    color: var(--gryphon-light-black);
    padding: 3vh 15%;
}

.about_us {
    justify-content: center;
    flex-direction: column;
    line-height: 250%;
    display: flex;
}

.about_us h1 {
    margin-bottom: 0;
    text-align: center;
}

.about_us p {
    line-height: 150%;
    font-size: 1.2em;
}

.our_cars {
    justify-content: center;
    flex-direction: column;
    line-height: 250%;
    display: flex;
}

hr {
    border: 0;
    clear: both;
    display: block;
    width: 99%;
    background: linear-gradient(to right, var(--gryphon-white) 5%, var(--gryphon-red) 50%, var(--gryphon-white) 95%);
    height: 3px;
    border-radius: 50px;
}

.our_cars > h1 {
    margin-bottom: 0;
}

.car_listings {
    flex-direction: row;
    display: flex;
    padding: 0;
    justify-content: space-between;
}

.car_listings > div {
    width: 45%;
}

@media screen and (max-width: 1000px) {
    .car_listings {
        flex-direction: column;
        justify-content: center;
    }
    .car_listings > div {
        width: 100%;
    }
}

.car_listings > div > h2 {
    margin-bottom: 0;
}

.car_listings > div > p {
    margin-top: 0;
    line-height: 130%;
    font-size: 1.2em;
}

.car_portrait {
    width: 100%;
    height: auto;
    border-radius: 20px;
}

.floating_scroll_body {
    z-index: 1;
    width: 100%;
    top: 100%;
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
}

.event {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}

.event h2 {
    width: 65%;
    font-size: 22px;
    padding-left: 5px;
}

.event h3 {
    font-size: 18px;
    padding-right: 5px;
}

.event > * {
    margin: 10px 0;
}

.event > p {
    font-weight: 600;
}

.clock {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.clock > div > h2 {
    margin: 0.5em 0 0 0;
    font-weight: 700;
}
.clock > div > h3 {
    margin: 0 0 0.5em 0;
    font-weight: 200;
}

.upcoming_events > h1 {
    margin-bottom: 0;
}

.upcoming_events {
    background-color: rgba(255, 255, 255, 0.7);
    color: #000000;
    width: 30%;
    min-width: 350px;
    border-radius: 20px;
    align-items: center;
    text-align: center;
    padding-bottom: 15px;
}

.overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.banner {
    padding-top: 4em; /* So we are not hidden under navbar on some screens */
    width: 25%;
    min-width: 300px;
    /* backdrop-filter: blur(5px); */
    box-shadow: 5px;
    /* filter: var(--light-black-filter); */
}
</style>
