export default function Emma() {

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <html lang="en">
            <head>
              <title>Emma Wismer email signature</title>
            </head>
            <body>
              <table
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="
                font-family: Helvetica, sans-serif;
                font-size: 13px;
                line-height: normal;
              "
              >
                <tr>
                  <td>
                    <p style="font-size: 16px; margin: 0; padding: 0; color: #000">
                      Emma Wismer
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p
                      style="
                      padding-bottom: 16px;
                      padding-top: 3px;
                      margin: 0;
                      color: #000;
                    "
                    >
                      Co-founder & Accounts
                      <br />
                      <a
                        href="tel:+15144029382"
                        style="color: #000; text-decoration: none; line-height: normal"
                      >
                        +1 (514) 402 9382
                      </a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="https://brunch.work">
                      <img
                        src="https://brunch.work/images/brunch_email_light@2x.png"
                        alt="brunch logo"
                        style="width: 140px; height: 29.4px"
                      />
                    </a>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
        }}
      />
    );
}