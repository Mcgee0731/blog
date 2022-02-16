<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="page-heading">
                        <h1>Contact Me</h1>
                        <span class="subheading">Have questions? I have answers.</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                    <div class="my-5">
                        <form>
                            <div class="form-floating">
                                <input v-model="form.name" class="form-control" id="inputName" type="text" placeholder="Enter your name..." />
                                <label for="inputName">Name</label>
                            </div>
                            <div class="form-floating">
                                <input v-model="form.email" class="form-control" id="inputEmail" type="email" placeholder="Enter your email..." />
                                <label for="inputEmail">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input v-model="form.phone" class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number..." />
                                <label for="inputPhone">Phone Number</label>
                            </div>
                            <div class="form-floating">
                                <textarea v-model="form.message" class="form-control" id="inputMessage" placeholder="Enter your message here..." style="height: 12rem"></textarea>
                                <label for="inputMessage">Message</label>
                            </div>
                            <br />
                            <button @click.prevent="onsubmit" class="btn btn-primary text-uppercase" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  name:'ContactPage',
  data(){
    return {
      form:{
        name:'',
        email:'',
        phone:'',
        message:''
      }
    }
  },
  methods:{
    async onsubmit(){
      try {
        const { data } = await axios({
          method:'POST',
          url:this.GRIDSOME_API_URL+'/contacts',
          data:this.form
        })
        this.form.name = ""
        this.form.email = ""
        this.form.phone = ""
        this.form.message = ""

        console.log(data);
      }catch(err){
        window.alert('发送失败：',err)
      }
    }
  }
}
</script>

<style>

</style>