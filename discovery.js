particlesJS("particles-js", {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: ["#d6b98c", "#c48e3d", "#f5deb3"]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.35,
            random: true,
            anim: {
                enable: true,
                speed: 0.4,
                opacity_min: 0.08,
                sync: false
            }
        },

        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
            }
        },

        links: {
            enable: true,
            distance: 140,
            color: "#c48e3d",
            opacity: 0.18,
            width: 1
        },

        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,

            attract: {
                enable: true,
                rotateX: 800,
                rotateY: 1200
            }
        }
    },

    interactivity: {
        detect_on: "canvas",

        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {
            grab: {
                distance: 180,
                links: {
                    opacity: 0.45
                }
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});

const extraInfo = {
    'railway': `
        <h2>The Railway Bricks</h2>
        <hr style="border: 1px solid #c48e3d; margin: 1rem 0;">
        <p>In 1856, brothers John and William Brunton were building a railway between Karachi and Lahore. Needing ballast for the tracks, they dug up thousands of ancient fire-baked bricks from the nearby ruins, unknowingly destroying parts of Harappa to build the railroad.</p>
    `,
    'excavation': `
        <h2>Modern Archaeology</h2>
        <hr style="border: 1px solid #c48e3d; margin: 1rem 0;">
        <p>Between 1920 and 1922, systematic digging began. Rai Bahadur Daya Ram Sahni excavated Harappa, while R.D. Banerji discovered Mohenjo-Daro. These excavations made us know about the main cities of IVC.</p>
    `,
    'naming': `
        <h2>OG Historian</h2>
        <hr style="border: 1px solid #c48e3d; margin: 1rem 0;">
        <p>In 1850s, John Marshall looked at the discoveries and announced it was from a pretty old civilization, later named, Indus Valley Civilization.</p>
    `
};

function openModal(id) {
    document.getElementById('modal-body-text').innerHTML = extraInfo[id];
    document.getElementById('infoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('infoModal')) {
        closeModal();
    }
}
