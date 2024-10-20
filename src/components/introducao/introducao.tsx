import Github from './imgs/github.png';
import Linkedin from './imgs/linkedin.png';
import fotoCurriculo from './imgs/foto-curriculo.png';
import html from './imgs/html.png';
import css from './imgs/css.png';
import js from './imgs/js.png';
import react from './imgs/react.png';
import tailwind from './imgs/tailwindcss.png';
import { useTranslation, Trans } from 'react-i18next';
import { Grid, Box, Typography, AspectRatio, Link, IconButton } from '@mui/joy';

function Introducao() {
    const { t, i18n } = useTranslation();
    return (
        <Box>
            {/* Main content */}
            <Grid container spacing={2} sx={{ width: '100vw', height: { md: '100vh', sm: '110vh' }, justifyContent: 'center', alignItems: 'center' }}>
                {/* Text Section */}
                <Grid xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography level="h1" fontWeight="xl" fontSize={{ md: '50px', sm: '25px' }}>
                        Front-End React <br /> Developer
                        <IconButton component={Link} href="https://www.linkedin.com/in/pedro-alveslima/" target="_blank" sx={{ ml: 2 }}>
                            <img src={Linkedin} alt="linkedin-icon" className="w-6 hover:bg-blue-400" />
                        </IconButton>
                        <IconButton component={Link} href="https://github.com/pedrolaikem" target="_blank">
                            <img src={Github} alt="github-icon" className="w-6 rounded-[10px] hover:bg-blue-400" />
                        </IconButton>
                    </Typography>

                    {/* Description */}
                    <Typography fontSize={{ sm: '19px' }} sx={{ color: '#6b7280' }}>
                        <Trans i18nKey="description.aboutMe">
                            Olá, sou o Pedro Henrique. Bacharel em direito.
                            <br />
                            Cursando análise e desenvolvimento de sistemas.
                            <br />
                            Utilizo HTML, CSS, JavaScript, React e TailwindCSS.
                        </Trans>
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Typography level="h3" fontWeight="xl" fontSize={{ sm: '16px', md: '25px' }}>
                            <Trans i18nKey="description.techs">Tecnologias:</Trans>
                        </Typography>
                        <img src={html} alt="html-icon" className="md:w-[40px] sm:w-[25px]" />
                        <img src={css} alt="css-icon" className="md:w-[40px] sm:w-[25px]" />
                        <img src={js} alt="javascript-icon" className="md:w-[40px] sm:w-[25px]" />
                        <img src={react} alt="react-icon" className="md:w-[40px] sm:w-[25px]" />
                        <img src={tailwind} alt="tailwindcss-icon" className="md:w-[40px] sm:w-[25px]" />
                    </Box>
                </Grid>

                {/* Photo Section */}
                <div id="foto" className='sm:w-[300px] border-black rounded-[15px] border-4'>
                    <img src={fotoCurriculo} alt="foto-Pedro" className='rounded-[10px] ' />
                </div>
            </Grid>
            {/* End main content */}
        </Box>
    );
}

export default Introducao;