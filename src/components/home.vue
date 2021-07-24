<template>
    <section id="home" class="section">
        <div class="card secondary-background noShadow">
            <div class="block" style="margin-bottom: 60px;">
                <div class="column">
                    <h1 class="title white"><font size="+10">TO SEE THE <span class="primary-color">FUTURE TODAY</span></font></h1>
                    <h2 class="subtitle white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                </div>
            </div>

            <div class="block">
                <h1 class="title white" style="z-index: 2;"><font size="+10">[SOMETHING LIKE A <span class="primary-color">BANNER?]</span></font></h1>
                <img src="images/tempBanner.PNG" alt="" style="z-index: 1; transform: scale(1.1); margin-bottom: 150px">
                <!-- <carousel-3d>
                    <slide v-for="(slide, i) in slides" :index="i" :key="i">
                        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
                        </template>
                    </slide>
                </carousel-3d> -->
            </div>
        </div>
        <!-- OUR COMPANY -->
        <div class="block">
            <div class="column">
                <div class="card tertiary-background round">
                    <header class="card-header">
                        <p class="card-header-title is-centered primary-color">
                            <font size="+3">
                                Our Company
                            </font>
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <div class="columns">
                                <div class="column" style="height: calc(50vh - 40px);">
                                    <p><span class="primary-color">Revolution of Kitten</span> is a software development company located in Cebu City Philippines. We specialize in high technology cutting edge solutions for a global customer base.
                                        Our specialties include applications for Robots, Artificial Intelligence, Augmented/Mixed reality, Internet of Things, and more. New emerging technologies are our forte.</p>
                                    
                                    <p>We began in 2016 as an offshoring venture to maximize the low cost of business in the Philippines while utilizing the benefits of its young, well educated, and highly motivated workforce. </p>
                                    <p>Our goal is to grow into a global leader in providing applications for cutting edge new technology that is ready to change the world. 
                                        Since 2016 we have experienced exponential growth and partnered with major global technology corporations. We are excited about the years to come and the many opportunities that await us.</p>
                                    <p>Although we have grown quickly we are committed to maintaining a family work culture that emphasizes teamwork and the personal and professional growth of our staff. 
                                        We have seen the fruits of this approach as we are able to maintain low cost, quick turnaround, and high quality on all our projects.</p>
                                </div>
                                <div class="column" style="transform: scale(0.5); position: relative; bottom: calc(30vh - 125px); height: calc(50vh - 40px);">
                                    <img src="roki.png" alt="" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- SERVICES -->
        <div class="block">
            <div class="column">
                <div class="card tertiary-background round">
                    <header class="card-header">
                        <p class="card-header-title is-centered primary-color">
                            <font size="+3">
                                SERVICES
                            </font>
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            Each Image represents a project.
                            <div class="block">
                                TITLE HERE/NAME OF PROJECT
                                <carousel-3d>
                                    <slide v-for="(slide, i) in slides" :index="i" :key="i">
                                        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                                            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
                                        </template>
                                    </slide>
                                </carousel-3d>
                                DESCRIPTION HERE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CAREER OPPORTUNITIES -->
        <div class="block">
            <div class="column">
                <div class="card tertiary-background round">
                    <header class="card-header">
                        <p class="card-header-title is-centered primary-color">
                            <font size="+3">
                                CAREER OPPORTUNITIES
                            </font>
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <p>We are hiring now!</p>
                            <p>Are you an I.T. professional or recent graduate looking for challenging and exciting work? If so, send us your CV for consideration.
                                We are looking for driven, self motivated people who want to work in new, cutting edge software development.
                                If you have experience with or are interested in Augmented/Mixed Reality, Artificial Intelligence, Internet of Things, Robots, and other 
                                new technologies then Revolution of Kitten is a great place for you.</p>
                            <p>We work together as a team, helping each other grow and learn and accomplish amazing things. We foster a family atmosphere with monthly outings and 
                                events so that we don't just work hard but have fun and enjoy ourselves as well. It is our philosophy to invest in the potential of our staff by 
                                having them learn new things and continually grow professionally. We want working at Revolution of Kitten to not just be a job, but a career 
                                opportunity to become the best I.T. professional you can possibly be.</p>
                            <p>Contact us today.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="block">
            <div class="card tertiary-background whitesmoke round">
                <div class="card-content">
                    <div class="content has-text-left is-small">
                        <p>Revolution of Kitten Inc. <br>
                        Unit 1002-C 10th Floor Keppel Center, Samar Loop Cor. Cardinal Rosales Ave., <br>
                        Cebu Business Park, Cebu City, Philippines 6000 <br>
                        Tel. No. +63.32.233.9711</p>
                        <p>
                            ©2016 Revolution of Kitten. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'home',
    components: {

    },
    data: function () {
        return {
            slides: [
            {
                src: 'favicon.ico',
                text: 'test1'
            },
            {
                src: 'roki.png',
                text: 'test2'
            },
            {
                src: 'images/favicon.ico',
                text: 'test3'
            },
        ]
    }
  },
}
</script>

<style scoped>
    .white{
        color: white;
    }
    .whitesmoke{
        color: whitesmoke;
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
    .tertiary-background{
        background-color: rgb(27, 4, 20);
        color: white;
    }
    .round{
        border-radius: 30px;
    }
    .noShadow{
        box-shadow: none;
    }
</style>