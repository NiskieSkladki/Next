import LinearProgress from '@material-ui/core/LinearProgress';
import { useEffect, useRef, useState } from 'react';
import Confetti from 'react-canvas-confetti';
import { Col, Container, Row } from 'styled-bootstrap-grid';

import Heading from '../../../components/Heading/Heading';
import Paragraph from '../../../components/Paragraph/Paragraph';

export function useOnScreen(reference) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );

        observer.observe(reference.current);
        return () => {
            observer.disconnect();
        };
    }, []);

    return isIntersecting;
}

const HomeOurPatron = () => {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
    const [fire, setFire] = useState(false);
    const reference = useRef();
    const isVisible = useOnScreen(reference);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const progressReference = useRef(() => {});

    useEffect(() => {
        progressReference.current = () => {
            if (progress >= 100) {
                setProgress(100);
                setBuffer(100);
                if (!fire) {
                    // @ts-ignore
                    setFire({});
                }
            } else {
                if (isVisible) {
                    const diff = Math.random() * 10;
                    const diff2 = Math.random() * 10;
                    setProgress(progress + diff);
                    setBuffer(progress + diff + diff2);
                }
            }
        };
    });

    useEffect(() => {
        const timer = setInterval(() => {
            progressReference.current();
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const style = {
        // Position: 'absolute',
        position: 'absolute',
        width: '100%',
        height: '100%'
        // zIndex: -1
    };

    const colors = ['#bb0000', '#ffffff'];

    return (
        <>
            <Confetti
                // @ts-ignore
                style={style}
                className={'fireworks1'}
                ticks={500}
                fire={fire}
                particleCount={100}
                angle={60}
                spread={55}
                colors={colors}
                origin={{ x: 0 }}
            />
            <Confetti
                // @ts-ignore
                style={style}
                className={'fireworks2'}
                ticks={500}
                fire={fire}
                particleCount={100}
                angle={120}
                spread={55}
                colors={colors}
                origin={{ x: 1 }}
            />
            <Container style={{ height: '100%', position: 'relative' }}>
                <Row style={{ height: '100%' }}>
                    <Col
                        xl="12"
                        lg="12"
                        md="12"
                        sm="12"
                        style={{ paddingBottom: '2rem' }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                paddingBottom: '1rem'
                            }}
                        >
                            <Heading color={'white'} underline={false}>
                                Nasz Patron
                            </Heading>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                paddingBottom: '2rem'
                            }}
                        >
                            <Heading
                                size={'large'}
                                color={'white'}
                                underline={false}
                                type={'h3'}
                            >
                                LUDWIG VON MISES
                            </Heading>
                        </div>
                        <Paragraph color={'white'}>
                            Ludwig von Mises by?? najwybitniejszym obro??c??
                            kapitalizmu i krytykiem socjalizmu w XX wieku,
                            najwa??niejszym przedstawicielem austriackiej szko??y
                            ekonomii, nauczycielem Hayeka, Rothbarda oraz wielu
                            innych ekonomist??w i naukowc??w. Przez ca??e doros??e
                            ??ycie pisa?? i wyk??ada?? w wielu krajach. Jest autorem
                            kilkudziesi??ciu ksi????ek i ponad 250 artyku????w.
                            Pierwsza d??u??sza praca Theorie des Geldes und der
                            Umlaufsmittel (Teoria pieni??dza i kredytu, 1912)
                            przynios??a mu uznanie w ca??ej Europie. W kolejnej
                            znakomitej ksi????ce Die Gemeinwirtschaft:
                            Untersuchungen ??ber den Sozialismus (Socjalizm,
                            1922) Mises przewidzia?? upadek socjalizmu. Po
                            Anschlussie Austrii Mises wyje??d??a do Szwajcarii,
                            gdzie publikuje National??konomie: Theorie des
                            Handelns und Wirtschaftens (1940). W 1940 roku
                            przenosi si?? do USA. Tu ukazuje si?? Human Action
                            (1949) ??? rozszerzona, angielska wersja
                            National??konomie. Human Action, czyli Ludzkie
                            dzia??anie ??? opus magnum Misesa ??? zosta??o
                            przet??umaczone na wi??kszo???? j??zyk??w europejskich.
                        </Paragraph>
                    </Col>
                    <Col
                        xl="12"
                        lg="12"
                        md="12"
                        sm="12"
                        xs="12"
                        style={{ paddingBottom: '3rem' }}
                    >
                        <Row>
                            <Col xl="6" lg="6" md="6" sm="6" xs="12">
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        paddingBottom: '1rem'
                                    }}
                                >
                                    <Heading color={'white'} underline={false}>
                                        Edukacja
                                    </Heading>
                                </div>
                                <Paragraph color={'white'}>
                                    Kiedy dzia??aj??cy cz??owiek dobiera ??rodki
                                    s??u????ce osi??gni??ciu cel??w, zawsze w
                                    pierwszej kolejno??cisi??ga po teori??. U
                                    podstaw praktyki le??y zawsze jaka?? teoria.
                                    Dzi??ki edukacji mo??emy j?? zdoby?? i pcha??
                                    ??wiat ku lepszemu.
                                </Paragraph>
                            </Col>
                            <Col xl="6" lg="6" md="6" sm="6" xs="12">
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        paddingBottom: '1rem'
                                    }}
                                >
                                    <Heading color={'white'} underline={false}>
                                        Edukacja
                                    </Heading>
                                </div>
                                <Paragraph color={'white'}>
                                    Zdobywaj??c teori?? pozyskujemy wiedz??.
                                    Pozyskawszy wiedz?? mo??emy posi???? m??dro????.
                                    Posiadaj??c odpowiedni?? m??dro???? mo??emy podj????
                                    #ludzkieDzia??anie.
                                </Paragraph>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl="12" lg="12" md="12" sm="12" xs="12">
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                paddingBottom: '1rem'
                            }}
                        >
                            <Heading color={'white'} underline={false}>
                                Cel zbi??rki
                            </Heading>
                        </div>
                        <LinearProgress
                            ref={reference}
                            color="secondary"
                            variant="buffer"
                            value={progress}
                            valueBuffer={buffer}
                            title="Cel zbi??rki"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomeOurPatron;
