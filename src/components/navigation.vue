<template>
    <div>
        <navigation class="navbar nav-menu" role="navigation" aria-label="main navigation">
            <div id="mv_left" class="navbar-brand">
                <a class="navbar-item">
                    <img src="@/assets/LogoHD.png" class="scale">
                    <span id="mv_left" class="primary-color"> <b> REVOLUTION OF KITTEN, INC. </b></span>
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item white">
                                Home
                            </a>
                            <a class="navbar-item white">
                                Services
                            </a>
                            <a class="navbar-item white">
                                About Us
                            </a>
                        </div>
                        <div class="buttons">
                            <a class="button is-rounded primary-background">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </navigation>
    </div>
</template>

<style scoped>
    #mv_left{
        margin-left: 10px;
    }

    .nav-menu{
        margin-top: -60px;
        background-color: black;
    }
    .white{
        color: white;
    }
    .primary-background{
        background-color: rgb(189, 0, 129);
        color: white;
        border-color: rgb(189, 0, 129);
    }
    .primary-color{
        color: rgb(189, 0, 129);
    }
    .secondary-background{
        background-color: #050004;
        color: white;
    }
    .scale{
        transform: scale(1.8);
    }
</style>