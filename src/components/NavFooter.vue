<template>
    <div class="footer">
        <div class="contact_info">
            <h2 style="margin-bottom: 2px">Contact me at:</h2>
            <a href="mailto:contact@dallashart.com" class="contact_email">contact@dallashart.com</a>
        </div>

        <div class="media_logos">
            <a href="https://www.linkedin.com/company/gryphon-racing">
                <img src="/social_media/linkedin.svg" alt="Linkedin" />
            </a>
            <a href="https://github.com/GryphonRacingFSAE">
                <img src="/social_media/github.svg" alt="GitHub" />
            </a>
        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    color: var(--gryphon-red);
    text-align: center;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    padding: 50px 0;
    flex-grow: 0;
}

.media_logos img {
    height: 50px;
    width: 50px;
    margin: 10px;
    filter: invert(92%);
}

.contact_email {
    text-decoration: none;
    color: var(--gryphon-dark-white);
}

.contact_info {
    text-align: left;
    line-height: 170%;
}

@media screen and (max-width: 900px) {
    .footer {
        flex-direction: column;
    }

    .footer > * {
        margin: 10px 0;
    }

    .contact_info {
        text-align: center;
    }
}
</style>
