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
                imageSrc="/covers/p5.jpg"
                text="Каким будет Met Gala в 2024 году: все, что нужно знать о бале"
                author="Эдуард Юсупов"
                timeText="20 - 25 минут"
            />

            <div className={styles.mainBox}>
                <p>Met Gala&nbsp;&mdash; одно из&nbsp;самых громких событий в&nbsp;мире моды. Это благотворительный бал, который посещают мировые звезды и&nbsp;именитые дизайнеры. Главная особенность мероприятия&nbsp;&mdash; ежегодно меняющийся дресс-код, которому должны соответствовать наряды всех гостей. Для Met Gala артисты выбирают эпатажные и&nbsp;эффектные наряды&nbsp;&mdash; например, в&nbsp;2022 году актриса Ким Кардашьян примерила платье секс-символа 1950-х годов Мэрилин Монро, а&nbsp;в&nbsp;2019-м актер и&nbsp;музыкант Джаред Лето принес на&nbsp;мероприятие копию собственной головы. &laquo;Лента.&nbsp;ру&raquo; рассказывает об&nbsp;истории Met Gala, раскрывает дату проведения и&nbsp;дресс-код благотворительного бала в&nbsp;2024&nbsp;году.</p>

                <h3>Что такое Met Gala</h3>
                <p>Изначально Met Gala задумывался как мероприятие, на&nbsp;котором собирали средства на&nbsp;работу Института костюма Метрополитен-музея в&nbsp;Нью-Йорке. Первый благотворительный ужин провели в&nbsp;1948&nbsp;году. Долгое время мероприятие не&nbsp;выходило за&nbsp;рамки торжественного ужина для американской элиты&nbsp;&mdash; Met Gala превратился в&nbsp;благотворительный бал только в&nbsp;середине 1970-х.</p>
                <p>Постепенно это событие трансформировалось в&nbsp;настоящее зрелищное шоу&nbsp;&mdash; в&nbsp;разные годы в&nbsp;списке гостей Met Gala были певец Элтон Джон, художник Энди Уорхол и&nbsp;принцесса Диана. В&nbsp;итоге главной особенностью бала стали экстравагантные наряды звезд&nbsp;&mdash; каждый год они становятся темой для обсуждения в&nbsp;сети.</p>

                <img src="/covers/p5i1.png" />

                <p>Помимо дефиле на&nbsp;красной дорожке, приглашенные гости посещают выставку Института костюма и&nbsp;благотворительный ужин. После ужина знаменитостей ждет выступление одного из&nbsp;соведущих бала&nbsp;&mdash; в&nbsp;прошлые годы выступали такие звезды, как Леди Гага, Мадонна и&nbsp;Рианна.</p>

                <h3>Дата проведения</h3>

                <p>Met Gala ежегодно проходит в&nbsp;первый понедельник мая&nbsp;&mdash; бал традиционно приурочен к&nbsp;открытию новой выставки моды американского Института костюма.</p>

                <blockquote>6 мая 2024 года пройдет благотворительный бал&nbsp;Met Gala</blockquote>

                <p>В&nbsp;2024 году выставка продлится до&nbsp;2&nbsp;сентября.</p>
                <p>Совместить торжественное мероприятие с&nbsp;открытием музейной экспозиции было решено в&nbsp;1974 году&nbsp;&mdash; идея принадлежала бывшему главному редактору Vogue Диане Вриланд, которая в&nbsp;то&nbsp;время была распорядительницей бала.</p>
                <p>Кстати, именно с&nbsp;ее&nbsp;подачи Met Gala стал более гламурным и&nbsp;светским, а&nbsp;к&nbsp;участию в&nbsp;нем начали привлекать мировых звезд.</p>

                <img src="/covers/p5i2.png" />

                <h3>Где проходит Met Gala</h3>

                <p>Уже более 60&nbsp;лет неизменным местом проведения благотворительного бала остается Большой холл музея Метрополитен в&nbsp;Нью-Йорке (в&nbsp;этом музее как раз проходит ежегодная выставка Института костюма).<br />
                    Долгое время у&nbsp;Met Gala не&nbsp;было постоянного пристанища&nbsp;&mdash; мероприятие успели провести и&nbsp;в&nbsp;клубе Rainbow Room, и&nbsp;в&nbsp;отеле Waldorf Astoria и&nbsp;даже в&nbsp;Центральном парке Нью-Йорка. Бал перенесли в&nbsp;холл Метрополитен-музея только в&nbsp;1960 году&nbsp;&mdash; с&nbsp;тех пор локация бала остается постоянной.</p>

                <blockquote>Благотворительный бал Met Gala назван в честь нью-йоркского музея Метрополитен, где и проходит мероприятие</blockquote>

                <h3>Тема выставки</h3>
                <p>Тема благотворительного бала Met Gala всегда совпадает с&nbsp;темой ежегодной выставки Института костюма. Разработкой темы и&nbsp;подбором экспонатов занимается куратор Института костюма Эндрю Болтон. По&nbsp;словам Болтона, каждая новая тема выставки должна быть не&nbsp;только актуальной, но&nbsp;и&nbsp;задавать мировые модные тренды. В&nbsp;2023 году Met Gala был посвящен покойному дизайнеру Карлу Лагерфельду.</p>
                <p>Тему выставки 2024 года раскрыли осенью 2023-го. Экспозиция получила название &laquo;Спящие красавицы: пробуждение моды&raquo; (Sleeping Beauties: Reawakening Fashion). В&nbsp;ее&nbsp;основу лягут 250 нарядов и&nbsp;аксессуаров из&nbsp;постоянной коллекции музея. Среди них можно будет увидеть множество старинных вещей: например, английский лиф елизаветинской эпохи XVII века и&nbsp;бальное платье кутюрье Чарльза Фредерика Уорта 1877&nbsp;года. На&nbsp;выставке будут представлены и&nbsp;работы культовых модельеров: Эльзы Скиапарелли, Кристиана Диора, Ива Сен-Лорана.</p>
                <p>Журнал Vogue отметил, что &laquo;Спящие красавицы&raquo; не&nbsp;имеют ничего общего со&nbsp;сказками братьев Гримм и&nbsp;одноименным мультфильмом студии Disney. Тему 2024 года описали как &laquo;торжество одежды настолько хрупкой, что ее&nbsp;уже нельзя примерить&raquo;. &laquo;Эти &bdquo;спящие красавицы&ldquo; бережно хранятся в&nbsp;архивах Института костюма&raquo;,&nbsp;&mdash; объяснило издание. Целью выставки станет своеобразное возрождение редких экспонатов.</p>
                <p>Многие старинные вещи из&nbsp;коллекции действительно невозможно безопасно примерить. Однако создатели выставки обещают исправить это с&nbsp;помощью современных технологий: дополненной реальности, световых проекций и&nbsp;даже искусственного интеллекта.</p>


                <img src="/covers/p5i3.png" />

                <h3>Дресс-код Met Gala-2024</h3>

                <p>Дресс-код грядущего Met Gala стал известен в&nbsp;феврале 2024&nbsp;года. Тогда&nbsp;же объявили соведущих благотворительного бала&nbsp;&mdash; вместе с&nbsp;главным редактором Vogue Анной Винтур встречать звездных гостей будет актриса Зендея, певица Дженнифер Лопес, рэпер Bad Bunny и&nbsp;актер Крис Хэмсворт.</p>
                <p>Почетными гостями мероприятия станут креативный директор бренда Loewe Джонатан Андерсон и&nbsp;генеральный директор TikTok Шу&nbsp;Зи&nbsp;Чу (Shou Zi&nbsp;Chew)&nbsp;&mdash; в&nbsp;этом году именно TikTok стал главным спонсором благотворительного бала.</p>

                <blockquote>Дресс-код бала Met Gala в 2024 году получил название «Сад времени»</blockquote>

                <p>Организаторы бала, вероятно, выбрали тему &laquo;Сад времени&raquo;, вдохновившись одноименным рассказом британского писателя Джеймса Балларда. Его произведение рассказывает о&nbsp;супружеской паре аристократов, которая счастливо живет в&nbsp;доме, окруженном огромным цветником. Райское поместье со&nbsp;всех сторон обступает беснующаяся толпа, но&nbsp;каждый раз, когда его владелец срезает один из&nbsp;цветов в&nbsp;саду, время ненадолго поворачивается вспять. Таким образом семья спасается от&nbsp;разъяренных людей&nbsp;&mdash; но&nbsp;только до&nbsp;тех пор, пока в&nbsp;саду не&nbsp;остается всего один последний цветок.</p>

                <span className={styles.src}>Источник: <a href="https://lenta.ru/articles/2024/03/27/met-gala-v-2024-godu/">lenta.ru</a></span>

            </div>

            <h2 className={styles.next}>Читать далее</h2>
            <div className={styles.box}>
            <Link href="/news/p1" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/covers/p1.jpg"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Показы</h3>
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
                                <p>Татьяна Тимофеева</p>

                            </div>
                            <h3>Неделя моды в Париже 2024</h3>
                            <p>Самая насыщенная и самая богатая на именитые бренды неделя моды — парижская. Она поставила жирную точку и подтвердила все тренды, которые мы обозначили до неё. Мы полюбим бахрому, начнём присматриваться ко всевозможным трусам и купим парочку прозрачных вещей. Дословно повторять необязательно, но направление мысли уже ясно. Кстати, парижская неделя сопровождалась парочкой прощальных эмоциональных коллекций. Ну обо всем по порядку.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/news/p4" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/covers/p4.png.webp"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Мода</h3>
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
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Маст-хэв в летнем гардеробе для мужчин 2024</h3>
                            <p>Одеваться в самые жаркие месяцы года не самое приятное занятие (и уж точно не самое сухое). Но если вы правильно подберете мужскую летнюю одежду, то сможете переносить зной с высокомерием и уверенностью трехлетнего ребенка, впервые попробовавшего халапеньо.</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div style={{ width: '100%', height: '100px' }}></div>

        </div>
    );
}