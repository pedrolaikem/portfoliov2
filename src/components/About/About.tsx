import Coding from './imgs/Coding.svg';
import { Trans } from 'react-i18next';

function AboutMe() {
    return (
        <section id="sobre" className="w-full px-6 py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <img src={Coding} alt="Coding illustration" className="w-full max-w-md" />
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="font-inter font-extrabold text-3xl md:text-4xl">
                        <Trans i18nKey="description.about">About me</Trans>
                    </h2>
                    <h3 className="font-inter font-semibold text-lg md:text-xl text-gray-700">
                        <Trans i18nKey="description.dedicated" />
                    </h3>
                    <p className="font-inter text-base md:text-[17px] text-gray-600 leading-relaxed whitespace-pre-line">
                        <Trans i18nKey="description.mainAboutMe" />
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
