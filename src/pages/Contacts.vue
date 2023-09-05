<template>
    <div>
        <h1  class="head">
            Contact us
        </h1>
    </div>
    <div>
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
                <img src="https://www.oneindia.com/img/2015/02/04-1423022852-paris-map.jpg">
            </li>
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
</template>
<script>
export default {
    name: 'Contacts'
}
</script>
<style lang="scss" scoped>
.head{
    margin-bottom: 5rem;
    padding: 0;
    text-align: center;
}
h1:hover{
    color: red;
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
    position: relative;

	&:before {
	  pointer-events: none;
	  position: absolute;
	  z-index: -1;
	  content: '';
	  top: 100%;
	  left: 5%;
	  height: 10px;
	  width: 90%;
	  opacity: 0;
	  background: -webkit-radial-gradient(center, ellipse, rgba(0,0,0,.35) 0%, rgba(0, 0, 0, 0) 80%);
	  background: radial-gradient(ellipse at center, rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 80%);
	}

	&:hover,
	&:focus,
	&:active {
		transform: translateY(-5px); /* move the element up by 5px */

		&:before {
			opacity: 1;
			transform: translateY(5px); /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
		}
	}
}
    
.column{
        display: flex;
        flex-direction: column;
        li{
            margin: 0.5rem;
        }
    }
</style>