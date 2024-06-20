'use client'

import React from "react";
import styles from "@/app/news/news.module.css";
import NewsHat from "@/components/NewsHat";
import Image from "next/image";
import Link from "next/link";
import HeaderBack from "@/components/HeaderBack";


export default function NewsArticle() {
    return (
        <div className={styles.container}>
            <HeaderBack />
            <NewsHat
                imageSrc="/covers/p2.png"
                text="Гайд по выбору очков на лето"
                author="Ирина Лобанова"
                timeText="7 - 13 минут"
            />

            <div className={styles.mainBox}>
                <h3>КАКОЙ ЦВЕТ ГЛАЗ САМЫЙ «УЯЗВИМЫЙ»?</h3>
                <p>Уязвимы глаза всех оттенков, но, безусловно, карие&nbsp;&mdash; в&nbsp;меньшей степени. Пигмент меланин, который входит в&nbsp;состав пигментного слоя сетчатки, отвечает за&nbsp;поглощение световых лучей, препятствует отражению и&nbsp;рассеянию света по&nbsp;сетчатке, что позволяет сохранить четкость изображения. Поэтому повреждение сетчатки у&nbsp;людей со&nbsp;светлыми глазами (серыми, голубыми и&nbsp;т.&nbsp;д.), то&nbsp;есть с&nbsp;меньшим содержанием этого пигмента, бывает чаще.</p>

                <h3>КАК ОЧКИ ЗАЩИЩАЮТ ОТ СОЛНЦА?</h3>
                <p>Большую роль играет сам материал. Например, стекло и&nbsp;само по&nbsp;себе защищает от&nbsp;ультрафиолета (наверное, все слышали, что через окно загореть невозможно). Но&nbsp;на&nbsp;данный момент солнцезащитных очков со&nbsp;стеклянной линзой мало&nbsp;&mdash; это вчерашний день. Они травмоопасны, тяжелы, давят не&nbsp;переносицу. То, что большинство называет стеклами, на&nbsp;самом деле представляет собой различные варианты полимеров разного качества.</p>
                <p>Современные технологии позволяют встраивать в&nbsp;полимер компоненты, защищающие наш глаз от&nbsp;ультрафиолетового излучения. Эти технологии можно использовать при изготовлении не&nbsp;только очковых, но&nbsp;и&nbsp;контактных линз. Наличие ультрафиолетового блока не&nbsp;меняет прозрачность ни&nbsp;очковой линзы, ни&nbsp;контактной.</p>

                <h3>ЧЕМ ТЕМНЕЕ ОЧКИ, ТЕМ ЛУЧШЕ ЗАЩИТА?</h3>
                <p>Степень затемнения очков не&nbsp;связана с&nbsp;защитой от&nbsp;ультрафиолета: наличие ультрафиолетового блока не&nbsp;меняет прозрачность линзы. Контактная линза, блокирующая&nbsp;95% ультрафиолетового излучения, абсолютно прозрачна. Аналогично защищать могут прозрачные линзы обычных очков с&nbsp;диоптриями.</p>
                <p>Тем не&nbsp;менее видимый яркий свет не&nbsp;всегда приятен глазу: он&nbsp;вызывает дискомфорт, снижает контрастность и&nbsp;четкость изображения. Поэтому защита от&nbsp;излишнего света тоже необходима.</p>


                <h3>В ЧЕМ ОПАСНОСТЬ ТЕМНЫХ ОЧКОВ?</h3>
                <p>Если взять достаточно темные очки без ультрафиолетового блока, зрачок в&nbsp;таких очках расширяется (в&nbsp;темноте зрачок расширяется, чтобы &laquo;вобрать&raquo; больше света, а&nbsp;от&nbsp;яркого света, наоборот, сужается), в&nbsp;глаз попадает столько ультрафиолета, сколько не&nbsp;попало&nbsp;бы, если&nbsp;бы человек был вообще без очков. Поэтому обязательно приобретайте затемненные очки с&nbsp;ультрафиолетовым блоком.</p>
                <p>Скорее всего, очки с&nbsp;рынка за&nbsp;30&nbsp;рублей с&nbsp;ультрафиолетовым излучением никак не&nbsp;справятся. Лучше приобрести солнцезащитные очки в&nbsp;качественной оптике, где вы&nbsp;можете самостоятельно проверить на&nbsp;специальном индикаторе наличие ультрафиолетового блока и&nbsp;степень защиты.</p>


                <h3>ЧТО ОЗНАЧАЕТ «ПОЛЯРИЗАЦИЯ»?</h3>
                <p>За&nbsp;счет специальной пленки внутри линзы такие очки защищают глаза от&nbsp;слепящих бликов, которые возникают при отражении лучей солнца от&nbsp;горизонтальных поверхностей (снег, вода). Горизонтальные лучи могут раздражать и&nbsp;даже на&nbsp;время ослеплять глаза.</p>
                <p>Оптика, наделенная фильтрами с&nbsp;такими свойствами, позволяет глазам воспринимать лучи света только по&nbsp;вертикали: свет, который отражается от&nbsp;предметов в&nbsp;вертикальном направлении, позволяет глазам лучше распознавать цвета, контрасты. </p>
                <p>В&nbsp;оптике можно попросить показать очки с&nbsp;поляризацией. Там также должна быть возможность сделать тест, который вам сразу продемонстрирует разницу в&nbsp;качестве изображения в&nbsp;очках с&nbsp;поляризацией и&nbsp;без нее. Покупая такие очки, не&nbsp;нужно уточнять, что вам необходимо и&nbsp;с&nbsp;поляризацией, и&nbsp;с&nbsp;ультрафиолетовым блоком: очки с&nbsp;поляризационными фильтрами обладают защитой от&nbsp;ультрафиолета по&nbsp;умолчанию. Кстати, очки с&nbsp;поляризацией также могут иметь небольшую степень затемнения, но&nbsp;это не&nbsp;влияет на&nbsp;степень защиты.</p>


                <h3>ВЫБИРАЕМ СОЛНЦЕЗАЩИТНЫЕ ОЧКИ ДЛЯ ГОРОДА, ПЛЯЖА, ВОЖДЕНИЯ</h3>
                <p>Солнцезащитные очки нужны и&nbsp;в&nbsp;городе, и&nbsp;на&nbsp;море&nbsp;&mdash; ультрафиолет везде един. В&nbsp;солнечной Греции лучше использовать очки с&nbsp;большей степенью защиты, чем, скажем, в&nbsp;Москве или Петербурге. А&nbsp;если&nbsp;вы, к&nbsp;примеру, поедете в&nbsp;горы, там, конечно, нужны очень темные очки и&nbsp;с&nbsp;максимальной УФ-защитой.</p>
                <p>Как выбрать солнцезащитные очки для водителя? Автомобилистам важно выбрать очки с&nbsp;антибликовым покрытием: раз водитель смотрит через стекло автомобиля, то&nbsp;ультрафиолет в&nbsp;глаза не&nbsp;попадает, но&nbsp;есть блики, которые в&nbsp;яркую солнечную погоду или вечером будут создавать неудобства при вождении. Кстати, очки с&nbsp;поляризационными фильтрами помогут и&nbsp;тут.</p>

                <h3>НА ЧТО ЕЩЕ ОБРАТИТЬ ВНИМАНИЕ?</h3>
                <p>На&nbsp;форму очков. Более обтекаемая форма лучше защищает наши глаза, не&nbsp;позволяя ультрафиолетовому излучению, отраженному от&nbsp;боковых поверхностей, например от&nbsp;стен домов, и&nbsp;от&nbsp;асфальта попасть в&nbsp;наши глаза. В&nbsp;горах, заметьте, никто не&nbsp;носит прямые очки, так как необходима защита и&nbsp;от&nbsp;прямого, и&nbsp;от&nbsp;отраженного ультрафиолета.</p>

                <h3>КАК ВЫБРАТЬ ДЕТСКИЕ СОЛНЦЕЗАЩИТНЫЕ ОЧКИ?</h3>
                <p>Очень важно защищать глаза не&nbsp;только взрослым, но&nbsp;и&nbsp;детям. У&nbsp;детей зрачок шире, поэтому в&nbsp;глаз ребенка попадает большее количество ультрафиолета. Повреждающего действия еще нет, но&nbsp;ультрафиолет имеет свойство накапливаться в&nbsp;глазу. Без защиты от&nbsp;солнца приблизительно к&nbsp;18&ndash;20 годам глаз получает всю дозу безопасного ультрафиолетового излучения. Но&nbsp;лучше, если он&nbsp;получит ее&nbsp;гораздо позже&nbsp;&mdash; к&nbsp;30&ndash;35&nbsp;годам, например. Детские очки выбираются по&nbsp;тем&nbsp;же критериям, что и&nbsp;очки для взрослых. Важно, чтобы очки действительно защищали от&nbsp;уф-излучения. Веселые детские очки с&nbsp;рынка могут не&nbsp;справляться с&nbsp;этой задачей.</p>
                <p>Для защиты глаз также нужно использовать панамы, бейсболки, шляпы с&nbsp;полями, кепки&nbsp;&mdash; они уже частично защищают от&nbsp;ультрафиолета.</p>


                <h3>ЧТО СМОТРЕТЬ В МАРКИРОВКЕ?</h3>
                <p>Очки должны защищать от&nbsp;обоих типов солнечного излучения: лучей типа&nbsp;А (излучение в&nbsp;диапазоне 400&ndash;315&nbsp;нм) и&nbsp;В (излучение в&nbsp;диапазоне 315&ndash;280&nbsp;нм). Очки, защищающие от&nbsp;99% лучей обоих типов, часто имеют пометку UV400. Она может применяться в&nbsp;разных странах независимо от&nbsp;стандартов, по&nbsp;которым произведены очки. По&nbsp;аналогии может быть пометка UV380 (означает высокую степень защиты, но&nbsp;все&nbsp;же менее&nbsp;99%) и&nbsp;т.&nbsp;д. </p>
                <p>В&nbsp;разных странах стандарты, категории защиты и&nbsp;маркировка могут различаться, но&nbsp;в&nbsp;целом все они требуют как минимум 50%-ной защиты от&nbsp;УФ-лучей типа&nbsp;А (в&nbsp;таком случае защита от&nbsp;лучей&nbsp;В прилагается по&nbsp;умолчанию, потому что они короче лучей А).</p>
                <p>В&nbsp;большинстве стран сертификация является добровольной, и&nbsp;пометки в&nbsp;виде номеров стандартов есть не&nbsp;на&nbsp;всех этикетках.</p>
                <div className={styles.tgr}>
                    <p>Товары, соответствующие директивам&nbsp;ЕС, помечаются специальным знаком:</p>

                    <img src="https://rskrf.ru/upload/medialibrary/1d7/1d799bdc046abc5e2b0533ff5084f32c.png" />
                </div>


                <p>Роскачество провело эксперимент и сравнило солнцезащитные очки и профессиональные очки для медицинских специалистов, работающих с ультрафиолетовыми лампами.</p>
                <img src="https://rskrf.ru/upload/medialibrary/bb2/bb29c2bf8c0013d4f97ed70bb3cc2ebb.jpg" />

                <p>Профессиональные очки заблокировали излучение полностью, обычные – отчасти. </p>
                <p>Если вы периодически совершаете покупки в оптике, например, обновляете запасы жидкости для линз, то можно попросить консультанта «просветить» ваши очки, купленные на рынке или в переходе.</p>

                <span className={styles.src}>Источник: <a href="https://rskrf.ru/tips/eksperty-obyasnyayut/kak-vybrat-solntsezashchitnye-ochki/">Российская система качества (Роскачество)</a></span>

            </div>

            <h2 className={styles.next}>Читать далее</h2>
            <div className={styles.box}>
            <Link href="/news/p6" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/covers/p6.jpg"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Лайфхаки</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>5-10 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/avatar.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Омри Гиллат</p>

                            </div>
                            <h3>12 лайфхаков по уходу за обувью</h3>
                            <p>Обувь может рассказать о своем владельце до 90 % информации — к такому выводу пришел исследователь Омри Гиллат. Например, неновая, но ухоженная обувь говорит об ответственности и порядочности. Вспыльчивые люди предпочитают узкие полусапожки. В общем, человека часто оценивают по его обуви, поэтому ее необходимо держать в порядке.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/news/p3" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/covers/p3.webp"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Здоровье</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/avatar.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Юлия Самошкина</p>

                            </div>
                            <h3>10 проверенных средств для губ</h3>
                            <p>Когда заходит речь о макияже губ, тема давно не сводится лишь к выбору цвета помады или блеска. Продвинутые бьюти-энтузиасты смотрят шире и ждут от средств этой категории более широкого функционала: лифтинга, способности увеличивать объем, подобно бьюти-инъекциям гиалуронки, моделировать контур или даже просто крашать полку необычной коллекционной упаковкой. </p>
                        </div>
                    </div>
                </Link>
            </div>

            <div style={{ width: '100%', height: '300px' }}></div>

        </div>
    );
}