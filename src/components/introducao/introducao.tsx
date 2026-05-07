import fotoCurriculo from './imgs/foto-terno.jpg';
import { Trans } from 'react-i18next';
import { Box, IconButton, Link } from '@mui/joy';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiTailwindcss, SiJavascript } from 'react-icons/si';

const techs = [
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#3C873A' },
    { name: 'PHP', Icon: FaPhp, color: '#777BB4' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
];

function Introducao() {
    return (
        <Box id="home" className="w-full min-h-[80vh] flex items-center justify-center px-6 py-12">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text */}
                <div className="flex flex-col gap-6 order-2 lg:order-1">
                    <h1 className="font-inter font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight">
                        <Trans i18nKey="description.role">Full-Stack Developer</Trans>
                        <span className="inline-flex gap-2 ml-3 align-middle">
                            <IconButton component={Link} href="https://www.linkedin.com/in/pedro-alveslima" target="_blank" rel="noopener" size="sm">
                                <FaLinkedin size={28} className="hover:text-blue-600 transition-colors" />
                            </IconButton>
                            <IconButton component={Link} href="https://github.com/pedrolaikem" target="_blank" rel="noopener" size="sm">
                                <FaGithub size={28} className="hover:text-gray-700 transition-colors" />
                            </IconButton>
                        </span>
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                        <Trans i18nKey="description.tagline" />
                    </p>

                    <div className="flex flex-col gap-3">
                        <span className="font-inter font-bold text-sm uppercase tracking-wide text-gray-500">
                            <Trans i18nKey="description.techs">Stack</Trans>
                        </span>
                        <div className="flex flex-wrap gap-3 items-center">
                            {techs.map(({ name, Icon, color }) => (
                                <div
                                    key={name}
                                    title={name}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all"
                                >
                                    <Icon size={22} style={{ color }} />
                                    <span className="text-sm font-medium">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Photo */}
                <div className="flex justify-center order-1 lg:order-2">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl rotate-3"></div>
                        <img
                            src={fotoCurriculo}
                            alt="Pedro Henrique Alves Lima"
                            className="relative rounded-2xl object-cover w-72 md:w-80 lg:w-96 shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default Introducao;
