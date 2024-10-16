const nodemailer = require('nodemailer');
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.PLAYGRAOUND
);
  
oauth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

const sendEmailConfirmation = async (body) => {

    const accessToken = oauth2Client.getAccessToken();

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EM_USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        }
    });

    var mailData = {
        from: `New Lottery <${process.env.EM_USERAUTO}>`,
        to: body.to,
        subject: `Oi ${body.name}! Seu Jogo Chegou Pra Gente!`,
        html: `<!DOCTYPE html>

                <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

                    <head>
	                    <title></title>
	                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
						<!--[if mso]>
							<xml>
								<o:OfficeDocumentSettings>
									<o:PixelsPerInch>96</o:PixelsPerInch>
									<o:AllowPNG/>
								</o:OfficeDocumentSettings>
							</xml>
						<![endif]-->
						<!--[if !mso]><!-->
	                    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
	                    <style>
		                    * {
			                    box-sizing: border-box;
		                    }
		                    body {
			                    margin: 0;
			                    padding: 0;
		                    }
		                    a[x-apple-data-detectors] {
			                    color: inherit !important;
			                    text-decoration: inherit !important;
		                    }
		                    #MessageViewBody a {
			                    color: inherit;
			                    text-decoration: none;
		                    }
		                    p {
			                    line-height: inherit
		                    }
		                    .desktop_hide,
                            .desktop_hide table {
			                    mso-hide: all;
			                    display: none;
			                    max-height: 0px;
			                    overflow: hidden;
		                    }
		                    .image_block img+div {
			                    display: none;
		                    }
		                    @media (max-width:670px) {
			                    .desktop_hide table.icons-inner,
			                    .social_block.desktop_hide .social-table {
				                    display: inline-block !important;
			                    }
			                    .icons-inner {
				                    text-align: center;
			                    }
			                    .icons-inner td {
				                    margin: 0 auto;
			                    }
                                .image_block div.fullWidth {
				                    max-width: 100% !important;
			                    }
			                    .mobile_hide {
				                    display: none;
			                    }
			                    .row-content {
				                    width: 100% !important;
			                    }
			                    .stack .column {
				                    width: 100%;
				                    display: block;
			                    }
			                    .mobile_hide {
				                    min-height: 0;
				                    max-height: 0;
				                    max-width: 0;
				                    overflow: hidden;
				                    font-size: 0px;
			                    }
			                    .desktop_hide,
			                    .desktop_hide table {
				                    display: table !important;
				                    max-height: none !important;
			                    }
		                    }
	                    </style>
                    </head>

                    <body class="body" style="background-color: #222; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	                    <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #222;">
		                    <tbody>
			                    <tr>
				                    <td>
					                    <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #222;">
						                    <tbody>
							                    <tr>
								                    <td>
									                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;" width="650">
										                    <tbody>
											                    <tr>
												                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													                    <div class="spacer_block block-1" style="height:10px;line-height:10px;font-size:1px;">&#8202;</div>
													                    <table class="image_block block-2" width="100%" border="0" cellpadding="25" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														                    <tr>
															                    <td class="pad">
																                    <div class="alignment" align="center" style="line-height:10px">
																	                    <div class="fullWidth" style="max-width: 650px;"><img src="https://firebasestorage.googleapis.com/v0/b/newlottery-e3d80.appspot.com/o/resources%2Fletreiro.png?alt=media&token=df7e4d6f-c0ba-4a20-9bab-7d4520a3fd56" style="display: block; height: auto; border: 0; width: 100%; border-radius: 22px;" width="650" alt="New Lottery" title="New Lottery" height="auto"></div>
																                    </div>
															                    </td>
														                    </tr>
													                    </table>
												                    </td>
											                    </tr>
										                    </tbody>
									                    </table>
								                    </td>
							                    </tr>
						                    </tbody>
					                    </table>
					                    <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						                    <tbody>
							                    <tr>
								                    <td>
									                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;" width="650">
										                    <tbody>
											                    <tr>
												                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													                    <table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														                    <tr>
															                    <td class="pad">
																                    <div style="color:#adadad;direction:ltr;font-family:Fira Sans, Lucida Sans Unicode, Lucida Grande, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:180%;text-align:center;mso-line-height-alt:32.4px;">
																	                    <p style="margin: 0;">Abaixo está o código do seu jogo. Obrigado por fazer parte desse momento. Acompanhe o seu jogo no App e se prepare para vencer.</p>
																                    </div>
															                    </td>
														                    </tr>
													                    </table>
													                    <table class="button_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														                    <tr>
															                    <td class="pad">
																                    <div class="alignment" align="center">
                                                                                        <!--[if mso]>
                                                                                            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:76px;width:630px;v-text-anchor:middle;" arcsize="6%" strokeweight="0.75pt" strokecolor="#000000" fillcolor="#ffffff">
                                                                                                <w:anchorlock/>
                                                                                                <v:textbox inset="0px,0px,5px,0px">
                                                                                                    <center dir="false" style="color:#000000;font-family:sans-serif;font-size:22px">
                                                                                                        <![endif]-->
                                                                                                        <a href="www.example.com" target="_blank" style="background-color:#ffffff;border-bottom:1px solid #000000;border-left:1px solid #000000;border-radius:4px;border-right:1px solid #000000;border-top:1px solid #000000;color:#000000;display:block;font-family:Fira Sans, Lucida Sans Unicode, Lucida Grande, sans-serif;font-size:22px;font-weight:400;mso-border-alt:none;padding-bottom:15px;padding-top:15px;text-align:center;text-decoration:none;width:100%;word-break:keep-all;">
                                                                                                            <span style="word-break: break-word; padding-left: 45px; padding-right: 50px; font-size: 22px; display: inline-block; letter-spacing: normal;">
                                                                                                                <span style="word-break: break-word; line-height: 44px;">
                                                                                                                    <strong>${body.id}</strong>
                                                                                                                </span>
                                                                                                             </span>
                                                                                                        </a>
                                                                                                        <!--[if mso]>
                                                                                                    </center>
                                                                                                </v:textbox>
                                                                                            </v:roundrect>
                                                                                        <![endif]-->
                                                                                    </div>
															                    </td>
														                    </tr>
													                    </table>
													                    <div class="spacer_block block-3" style="height:15px;line-height:15px;font-size:1px;">&#8202;</div>
												                    </td>
											                    </tr>
										                    </tbody>
									                    </table>
								                    </td>
							                    </tr>
						                    </tbody>
					                    </table>
					                    <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131313;">
						                    <tbody>
							                    <tr>
								                    <td>
									                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										                    <tbody>
											                    <tr>
												                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													                    <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														                    <tr>
															                    <td class="pad" style="padding-left:20px;text-align:center;width:100%;">
																                    <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Fira Sans, Lucida Sans Unicode, Lucida Grande, sans-serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 36px;"><strong>Redes Sociais</strong></h1>
															                    </td>
														                    </tr>
													                    </table>
													                    <table class="social_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														                    <tr>
															                    <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;text-align:left;">
																                    <div class="alignment" align="left">
																	                    <table class="social-table" width="108px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		                    <tr>
																			                    <td style="padding:0 4px 0 0;">
                                                                                                    <a href="https://www.example.com/" target="_blank">
                                                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;">
                                                                                                    </a>
                                                                                                </td>
																			                    <td style="padding:0 4px 0 0;">
                                                                                                    <a href="https://www.example.com/" target="_blank">
                                                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/twitter@2x.png" width="32" height="auto" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;">
                                                                                                    </a>
                                                                                                </td>
																			                    <td style="padding:0 4px 0 0;">
                                                                                                    <a href="https://www.example.com/" target="_blank">
                                                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;">
                                                                                                    </a>
                                                                                                </td>
																		                    </tr>
																	                    </table>
																                    </div>
															                    </td>
														                    </tr>
													                    </table>
												                    </td>
											                    </tr>
										                    </tbody>
									                    </table>
								                    </td>
							                    </tr>
						                    </tbody>
					                    </table>
				                    </td>
			                    </tr>
		                    </tbody>
	                    </table><!-- End -->
                    </body>
                </html>`
    };

    var sender = await transporter.sendMail(mailData);

    return sender;

};

const sendEmailPrize = async (body) => {

	const accessToken = oauth2Client.getAccessToken();

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EM_USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: accessToken
        }
    });

	var mailData = {
        from: `New Lottery <${process.env.EM_USERAUTO}>`,
        to: body.to,
        subject: `Oi ${body.name}! Você ganhou um prêmio no New Lottery!`,
        html: `<!DOCTYPE html>

                <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

                    <head>
	                    <title></title>
	                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
						<!--[if mso]>
							<xml>
								<o:OfficeDocumentSettings>
									<o:PixelsPerInch>96</o:PixelsPerInch>
									<o:AllowPNG/>
								</o:OfficeDocumentSettings>
							</xml>
						<![endif]-->
						<!--[if !mso]><!-->
	                    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
	                    <style>
		                    * {
			                    box-sizing: border-box;
		                    }
		                    body {
			                    margin: 0;
			                    padding: 0;
		                    }
		                    a[x-apple-data-detectors] {
			                    color: inherit !important;
			                    text-decoration: inherit !important;
		                    }
		                    #MessageViewBody a {
			                    color: inherit;
			                    text-decoration: none;
		                    }
		                    p {
			                    line-height: inherit
		                    }
		                    .desktop_hide,
                            .desktop_hide table {
			                    mso-hide: all;
			                    display: none;
			                    max-height: 0px;
			                    overflow: hidden;
		                    }
		                    .image_block img+div {
			                    display: none;
		                    }
		                    @media (max-width:670px) {
			                    .desktop_hide table.icons-inner,
			                    .social_block.desktop_hide .social-table {
				                    display: inline-block !important;
			                    }
			                    .icons-inner {
				                    text-align: center;
			                    }
			                    .icons-inner td {
				                    margin: 0 auto;
			                    }
                                .image_block div.fullWidth {
				                    max-width: 100% !important;
			                    }
			                    .mobile_hide {
				                    display: none;
			                    }
			                    .row-content {
				                    width: 100% !important;
			                    }
			                    .stack .column {
				                    width: 100%;
				                    display: block;
			                    }
			                    .mobile_hide {
				                    min-height: 0;
				                    max-height: 0;
				                    max-width: 0;
				                    overflow: hidden;
				                    font-size: 0px;
			                    }
			                    .desktop_hide,
			                    .desktop_hide table {
				                    display: table !important;
				                    max-height: none !important;
			                    }
		                    }
	                    </style>
                    </head>

                    <body class="body" style="background-color: #222; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	                    <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #222;">
		                    <tbody>
			                    <tr>
				                    <td>
					                    <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #222;">
						                    <tbody>
							                    <tr>
								                    <td>
									                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;" width="650">
										                    <tbody>
											                    <tr>
												                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													                    <div class="spacer_block block-1" style="height:10px;line-height:10px;font-size:1px;">&#8202;</div>
													                    <table class="image_block block-2" width="100%" border="0" cellpadding="25" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														                    <tr>
															                    <td class="pad">
																                    <div class="alignment" align="center" style="line-height:10px">
																	                    <div class="fullWidth" style="max-width: 650px;"><img src="https://firebasestorage.googleapis.com/v0/b/newlottery-e3d80.appspot.com/o/resources%2Fletreiro.png?alt=media&token=df7e4d6f-c0ba-4a20-9bab-7d4520a3fd56" style="display: block; height: auto; border: 0; width: 100%; border-radius: 22px;" width="650" alt="New Lottery" title="New Lottery" height="auto"></div>
																                    </div>
															                    </td>
														                    </tr>
													                    </table>
												                    </td>
											                    </tr>
										                    </tbody>
									                    </table>
								                    </td>
							                    </tr>
						                    </tbody>
					                    </table>
					                    <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						                    <tbody>
							                    <tr>
								                    <td>
									                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 650px; margin: 0 auto;" width="650">
										                    <tbody>
											                    <tr>
												                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													                    <table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														                    <tr>
															                    <td class="pad">
																                    <div style="color:#adadad;direction:ltr;font-family:Fira Sans, Lucida Sans Unicode, Lucida Grande, sans-serif;font-size:18px;font-weight:400;letter-spacing:0px;line-height:180%;text-align:center;mso-line-height-alt:32.4px;">
																	                    <p style="margin: 0;">Na sua aposta ${body.idBet}, você acertou ${body.hits} números, no jogo ${body.gameid}! Você receberá:</p>
																                    </div>
															                    </td>
														                    </tr>
													                    </table>
													                    <table class="button_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														                    <tr>
															                    <td class="pad">
																                    <div class="alignment" align="center">
                                                                                        <!--[if mso]>
                                                                                            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:76px;width:630px;v-text-anchor:middle;" arcsize="6%" strokeweight="0.75pt" strokecolor="#000000" fillcolor="#ffffff">
                                                                                                <w:anchorlock/>
                                                                                                <v:textbox inset="0px,0px,5px,0px">
                                                                                                    <center dir="false" style="color:#000000;font-family:sans-serif;font-size:22px">
                                                                                                        <![endif]-->
                                                                                                        <a href="www.example.com" target="_blank" style="background-color:#ffffff;border-bottom:1px solid #000000;border-left:1px solid #000000;border-radius:4px;border-right:1px solid #000000;border-top:1px solid #000000;color:#000000;display:block;font-family:Fira Sans, Lucida Sans Unicode, Lucida Grande, sans-serif;font-size:22px;font-weight:400;mso-border-alt:none;padding-bottom:15px;padding-top:15px;text-align:center;text-decoration:none;width:100%;word-break:keep-all;">
                                                                                                            <span style="word-break: break-word; padding-left: 45px; padding-right: 50px; font-size: 22px; display: inline-block; letter-spacing: normal;">
                                                                                                                <span style="word-break: break-word; line-height: 44px;">
                                                                                                                    <strong>${body.prize}</strong>
                                                                                                                </span>
                                                                                                             </span>
                                                                                                        </a>
                                                                                                        <!--[if mso]>
                                                                                                    </center>
                                                                                                </v:textbox>
                                                                                            </v:roundrect>
                                                                                        <![endif]-->
                                                                                    </div>
															                    </td>
														                    </tr>
													                    </table>
													                    <div class="spacer_block block-3" style="height:15px;line-height:15px;font-size:1px;">&#8202;</div>
												                    </td>
											                    </tr>
										                    </tbody>
									                    </table>
								                    </td>
							                    </tr>
						                    </tbody>
					                    </table>
					                    <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #131313;">
						                    <tbody>
							                    <tr>
								                    <td>
									                    <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px; margin: 0 auto;" width="650">
										                    <tbody>
											                    <tr>
												                    <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													                    <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														                    <tr>
															                    <td class="pad" style="padding-left:20px;text-align:center;width:100%;">
																                    <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Fira Sans, Lucida Sans Unicode, Lucida Grande, sans-serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 36px;"><strong>Redes Sociais</strong></h1>
															                    </td>
														                    </tr>
													                    </table>
													                    <table class="social_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														                    <tr>
															                    <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;text-align:left;">
																                    <div class="alignment" align="left">
																	                    <table class="social-table" width="108px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		                    <tr>
																			                    <td style="padding:0 4px 0 0;">
                                                                                                    <a href="https://www.example.com/" target="_blank">
                                                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" width="32" height="auto" alt="Facebook" title="facebook" style="display: block; height: auto; border: 0;">
                                                                                                    </a>
                                                                                                </td>
																			                    <td style="padding:0 4px 0 0;">
                                                                                                    <a href="https://www.example.com/" target="_blank">
                                                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/twitter@2x.png" width="32" height="auto" alt="Twitter" title="twitter" style="display: block; height: auto; border: 0;">
                                                                                                    </a>
                                                                                                </td>
																			                    <td style="padding:0 4px 0 0;">
                                                                                                    <a href="https://www.example.com/" target="_blank">
                                                                                                        <img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/instagram@2x.png" width="32" height="auto" alt="Instagram" title="instagram" style="display: block; height: auto; border: 0;">
                                                                                                    </a>
                                                                                                </td>
																		                    </tr>
																	                    </table>
																                    </div>
															                    </td>
														                    </tr>
													                    </table>
												                    </td>
											                    </tr>
										                    </tbody>
									                    </table>
								                    </td>
							                    </tr>
						                    </tbody>
					                    </table>
				                    </td>
			                    </tr>
		                    </tbody>
	                    </table><!-- End -->
                    </body>
                </html>`
    };

	var sender = await transporter.sendMail(mailData);

    return sender;

};

module.exports = {
    sendEmailConfirmation,
	sendEmailPrize
};