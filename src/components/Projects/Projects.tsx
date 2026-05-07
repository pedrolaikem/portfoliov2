import { Trans, useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import sw from './Imgs/sw.png';
import chessmate from './Imgs/chessmate.png';
import ayumi from './Imgs/ayumi.png';

type Project = {
    image: string;
    titleKey: string;
    descKey: string;
    stackKey: string;
    liveUrl?: string;
    githubUrl?: string;
};

const projects: Project[] = [
    {
        image: chessmate,
        titleKey: 'description.chessmateTitle',
        descKey: 'description.chessmateDesc',
        stackKey: 'description.chessmateStack',
        liveUrl: 'https://chess-mate-beta.vercel.app/',
    },
    {
        image: ayumi,
        titleKey: 'description.ayumiTitle',
        descKey: 'description.ayumiDesc',
        stackKey: 'description.ayumiStack',
        liveUrl: 'https://ayumi-dentista.vercel.app/',
    },
    {
        image: sw,
        titleKey: 'description.SW',
        descKey: 'description.SW2',
        stackKey: 'description.SW3',
        liveUrl: 'https://starwarsfrontend.vercel.app/',
        githubUrl: 'https://github.com/pedrolaikem/project-soccer-team',
    },
];

function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projetos" className="w-full px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="font-inter font-extrabold text-3xl md:text-4xl mb-3">
                        <Trans i18nKey="description.projectsTitle" />
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        <Trans i18nKey="description.projectsSubtitle" />
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col rounded-xl overflow-hidden border border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all bg-white"
                        >
                            <div className="aspect-video w-full bg-gray-100 overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={t(p.titleKey)}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col flex-1 p-5 gap-3">
                                <h3 className="font-inter font-bold text-lg">
                                    <Trans i18nKey={p.titleKey} />
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                                    <Trans i18nKey={p.descKey} />
                                </p>
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    <Trans i18nKey={p.stackKey} />
                                </p>
                                <div className="flex gap-3 pt-2 border-t border-gray-100">
                                    {p.liveUrl && (
                                        <a
                                            href={p.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-black hover:text-blue-600 transition-colors"
                                        >
                                            <FaExternalLinkAlt size={14} />
                                            <Trans i18nKey="description.liveLink" />
                                        </a>
                                    )}
                                    {p.githubUrl ? (
                                        <a
                                            href={p.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-semibold text-black hover:text-blue-600 transition-colors"
                                        >
                                            <FaGithub size={16} />
                                            <Trans i18nKey="description.githubLink" />
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-2 text-sm font-medium text-gray-400">
                                            <FaLock size={12} />
                                            <Trans i18nKey="description.unavailable" />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
