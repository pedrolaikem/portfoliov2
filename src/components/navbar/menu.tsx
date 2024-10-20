import { Grid, Box, Button, Typography, Select, Option } from '@mui/joy';
import MenuIcon from './img/union.jpeg';
import ArrowDropDownIcon from './img/arrow_dropdown_icon.png';
import { useTranslation, Trans } from 'react-i18next';
import { findFlagUrlByNationality } from "country-flags-svg";
import { useState } from 'react';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const flagUrl = findFlagUrlByNationality("Brazilian");
const flagUrl2 = findFlagUrlByNationality("American");

const lngs = {
    pt: { nativeName: 'Português', img: `${flagUrl}` },
    en: { nativeName: 'English', img: `${flagUrl2}` },
};

function Menu() {
    const { i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const renderValue = () => {
        const selectedLng = i18n.language;

        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={lngs[selectedLng].img} alt={lngs[selectedLng].nativeName} style={{ width: '20px', height: '20px', marginRight: '15px' }} />
                {lngs[selectedLng].nativeName}
            </div>
        );
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <Grid
            sx={{
                bgcolor: 'black',
                width: '100%',
            }}
        >
            {/* Navbar */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ height: '60px', px: 4 }}>
                <Grid>
                    <Typography component="a" href="/" sx={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>
                        Pedro.dev
                    </Typography>
                </Grid>
                <Grid>
                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, pr: 2 }}>
                        {/* Adicionando o Select para troca de idioma */}
                        <Select
                            variant="outlined"
                            indicator={<KeyboardArrowDown sx={{color: 'black'}} />}
                            sx={{ bgcolor: 'white', mr: 2, minWidth: '200px' }}
                            defaultValue={'pt'}
                            renderValue={renderValue}
                        >
                            {Object.keys(lngs).map((lng) => (
                                <Option key={lng} value={lng} onClick={() => i18n.changeLanguage(lng)}>
                                    <img src={lngs[lng].img} alt={lng} style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                                    {lngs[lng].nativeName}
                                </Option>
                            ))}
                        </Select>
                        <Button variant="plain" component="a" href="/" sx={{ color: 'white', mx: 1, '&:hover': { bgcolor: 'white', color: 'black' } }}>
                            Home
                        </Button>
                        <Button component="a" variant="plain" href="#sobre" sx={{ color: 'white', mx: 1, '&:hover': { bgcolor: 'white', color: 'black' } }}>
                            <Trans i18nKey="description.menu1">Sobre</Trans>
                        </Button>
                        <Button component="a" variant="plain" href="#projetos" sx={{ color: 'white', mx: 1, '&:hover': { bgcolor: 'white', color: 'black' } }}>
                            <Trans i18nKey="description.menu2">Projetos</Trans>
                        </Button>
                        <Button component="a" variant="plain" href="#contatos" sx={{ color: 'white', mx: 1, '&:hover': { bgcolor: 'white', color: 'black' } }}>
                            <Trans i18nKey="description.menu3">Contato</Trans>
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'block', lg: 'none' }, pr: 2 }}>
                        <Button onClick={toggleMenu} variant="plain">
                            <img src={isMenuOpen ? MenuIcon : ArrowDropDownIcon} alt="Menu Icon" id="menuIcon" style={{ cursor: 'pointer', maxWidth: '26px', maxHeight: '15px' }} />
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {
                isMenuOpen && (
                    <>
                        {/* Hidden mobile menu */}
                        <Box
                            id="mobilemenu"
                            sx={{
                                bgcolor: 'black',
                                color: 'white',
                                textAlign: 'center',
                                width: '150px',
                                position: 'absolute',
                                top: '60px',
                                right: '0px',
                                zIndex: 999,
                            }}
                        >
                            <Button component="a" variant="plain" href="/" sx={{ display: 'block', py: 2, color: 'white', textDecoration: 'none' }}>
                                Home
                            </Button>
                            <Button component="a" variant="plain" href="#sobre" sx={{ display: 'block', py: 2, color: 'white', textDecoration: 'none' }}>
                                <Trans i18nKey="description.menu1">Sobre</Trans>
                            </Button>
                            <Button component="a" variant="plain" href="#projetos" sx={{ display: 'block', py: 2, color: 'white', textDecoration: 'none' }}>
                                <Trans i18nKey="description.menu2">Projetos</Trans>
                            </Button>
                            <Button component="a" variant="plain" href="#contatos" sx={{ display: 'block', py: 2, color: 'white', textDecoration: 'none' }}>
                                <Trans i18nKey="description.menu3">Contato</Trans>
                            </Button>
                        </Box>
                    </>
                )
            }

        </Grid>
    );
}

export default Menu;