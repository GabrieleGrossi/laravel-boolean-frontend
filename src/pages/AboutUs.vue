<template>
    <div class="contacts">
            <h1  class="head">
                About Us
            </h1>
            <div class="container">
                <div class="left-column">
                    <h2>
                        Il TheCocktailDB è il luogo perfetto per i giovani alla ricerca di divertimento, buona musica e bevande deliziose. Situato nel cuore della città, il nostro bar è un'aggiunta fresca e vivace alla scena notturna locale. Siamo entusiasti di darvi il benvenuto in un'atmosfera amichevole e accogliente, dove potrete rilassarvi con gli amici o conoscere persone nuove.
                    </h2>
                    <img src="https://us.123rf.com/450wm/dolgachov/dolgachov1608/dolgachov160804295/61235685-la-gente-svago-amicizia-e-concetto-di-comunicazione-gruppo-di-amici-sorridenti-felici-che-bevono.jpg?ver=6" alt="people at bar">
                </div>
                <div class="right-column">
                    <p>
                        <h2>
                            Cosa ci rende unici:
                        </h2>
                        <ul class="column">
                            <li>
                                Cocktail Creativi: Il nostro team di barman esperti è pronto a deliziarvi con una vasta selezione di cocktail unici e deliziosi. Dai classici ai drink personalizzati, abbiamo qualcosa per tutti i gusti.
                            </li>
                            <li>
                                Musica Live: Ogni fine settimana, ospitiamo band locali e DJ per farvi ballare tutta la notte. La nostra pista da ballo è il posto ideale per scatenarsi e divertirsi.
                            </li>
                            <li>
                                Menù Gourmet: Non serviamo solo bevande eccezionali, ma anche deliziosi piatti per soddisfare la vostra fame. Dai finger food alle pietanze gourmet, la nostra cucina saprà conquistarvi.
                            </li>
                            <li>
                                Eventi Speciali: Organizziamo regolarmente eventi speciali, come serate a tema, feste a sorpresa e competizioni divertenti. Restate sintonizzati sui nostri canali social per rimanere aggiornati.
                            </li>
                            <li>
                                Ambiente Accogliente: Il nostro bar è stato progettato con cura per creare un'atmosfera accogliente e alla moda. Siamo sicuri che vi sentirete come a casa vostra.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div class="flex">
                <ul>
                    <li>
                        <div>
                            <h1 class="text-hover">
                                I nostri orai
                            </h1>
                            <ul class="column">
                                <li>
                                    Lunedì 7:30/23:00
                                </li>
                                <li>
                                    Martedì 7:30/23:00
                                </li>
                                <li>
                                    Mercoledì 7:30/23:00
                                </li>
                                <li>
                                    Giovedì 7:30/23:00
                                </li>
                                <li>
                                    Venerdì 7:30/01:00
                                </li>
                                <li>
                                    Sabato 7:30/01:00
                                </li>
                                <li>
                                    Domenica 7:30/23:00
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h1 class="text-hover">
                            Dove siamo
                        </h1>
                        <h3>
                            Puoi trovarci in: <br>
                            <a>
                                Piazza la bomba n. 33
                            </a>
                        </h3>
                    </li>
                    <img src="https://www.oneindia.com/img/2015/02/04-1423022852-paris-map.jpg">
                </ul>
                <ul>
                    <li>
                        <h1 class="text-hover">
                            Contatti
                        </h1>
                        <ul class="column">
                            <li>
                                <h3>
                                    Email:
                                </h3>
                                <h5 class="text-hover">
                                    cocktails.bar@gmail.com 
                                </h5>
                            </li>
                            <li>
                                <h3>
                                    Tel:
                                </h3>
                                <h5 class="text-hover">
                                    065 8895365
                                </h5>
                            </li>
                            <li>
                                <h3>
                                    Cel:
                                </h3>
                                <h5 class="text-hover">
                                    333 6548752
                                </h5>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
    name: 'Contacts'
}
</script>
<style lang="scss" scoped>
div.contacts{
    background-image: url('https://images.pexels.com/photos/4667030/pexels-photo-4667030.jpeg?cs=srgb&dl=pexels-cottonbro-studio-4667030.jpg&fm=jpg');
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
    height: 100%;
    color: white;
    opacity: 0.7;
    padding-top: 4.5rem;
}
ul{
    margin-right: 4rem;
    margin-left: 4rem;
}
li{
    list-style-type: none;
}
.head{
    margin-bottom: 5rem;
    padding: 0;
    text-align: center;
}
h1:hover{
    color: red;
}
.flex{
    display: flex;
    justify-content: space-between;
    color: magenta;
    text-transform: capitalize;
}
img{
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin-top: 2rem;
}
h1{
    margin-bottom: 1.5rem;
    a{
        margin-top: 1rem;
    }
}
h3{
    text-align: center;
    margin-bottom: 0.5rem;
}
.text-hover{
	text-align: center;
}
    
.column{
        display: flex;
        flex-direction: column;
        li{
            margin: 0.5rem;
        }
    }
div.container{
    margin: 0 auto;
    display: flex;
    width: 80%;
    background-color:  rgba(0,0,0,.7);
    border-radius: 1rem;
    flex-wrap: wrap;
    .left-column{
        width: 50%;
        padding: 2rem;
        img{
            width: 380px;
            height: 380px;;
        }
        
    }
    .right-column{
        width: 50%;
        padding: 2rem;
    }
    ul{
        margin: 0;
        padding: 0;
    };
}
</style>
