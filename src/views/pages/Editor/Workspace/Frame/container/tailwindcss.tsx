function tailwindcss() {
    // <script src="https://cdn.tailwindcss.com"></script>
    const initialContent = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
            </head>
            <body class="bg-white">
                <div></div>
            </body>
            <script src="https://cdn.tailwindcss.com"></script>
        </html>
    `;

    const initialConfig = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          maxWidth: {
              '8xl'  : '86rem',
              '9xl'  : '90rem',
              '10xl' : '94rem',
          },
          colors: {
              brand: {
                  '500' : 'red'
              }
          },
        },
      },
      plugins: [],
    };

    return initialContent;
}

export default tailwindcss;