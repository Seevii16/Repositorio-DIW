module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
           
            colors: {
                "azul-claro": "#37bcf9",
                "azul-oscuro": "#0370b9",
                "naranja": "#D12D0F"
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'from-below': 'translate-y-56 500ms linear',

            }
        },
    },
    variants: {
        extend: {
            animation: ['responsive', 'hover', 'group-hover'],
            fontSize: ['responsive', 'hover', 'group-hover'],
        }
    }
}
