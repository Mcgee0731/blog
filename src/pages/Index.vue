<template>
  <Layout>
    <!-- Page Header-->
    <!-- `url(${GRIDSOME_API_URL + general.cover.url})` -->
    <header class="masthead" :style="{backgroundImage: url(general.cover.url)}">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-10">
                    <div class="site-heading">
                        <h1>{{general.title}}</h1>
                        <span class="subheading">{{general.subtitle}}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <!-- Post preview-->
                <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
                    <g-link :to="'/post/'+ edge.node.id">
                        <h2 class="post-title">{{ edge.node.title }}</h2>
                        <h3 class="post-subtitle">{{ edge.node.desc }}</h3>
                    </g-link>
                    <p class="post-meta">
                        Posted by
                        <g-link to="/about/">{{ edge.node.create_by}}</g-link>
                        on {{ edge.node.created_at | date('MMM DD,YYYY') }}
                    </p>
                  <p>
                    <span v-for="tag in edge.node.tags" :key="tag.id">
                      <g-link :to="'/tag/'+tag.id" style="font-size:14px;">{{tag.title}}</g-link>
                      &nbsp;
                    </span> 
                  </p>
                  <hr class="my-4" />
                </div>
                
                <!-- 页码组件-->
                <!-- <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div> -->
                <pager :info="$page.posts.pageInfo"/>
            </div>
        </div>
    </div> 
  </Layout>
</template>

<!-- @paginate 框架自带分页， perpage 每页几条， page第几页 -->
<page-query>
query ($page:Int){
  posts:allStrapiPost(perPage:10,page:$page)@paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        create_by
        tags {          
          id
          title
        }
        created_at
        desc
      }
    }
  }
  allStrapiGeneral {
    edges {
      node {
        id
        title
        subtitle
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
// 页码组件
import {Pager} from 'gridsome'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  name:'HomePage',
  components:{
    Pager // 分页组件
  },
  computed:{
    // 单个模板，用于blog title，subtitle，
    general(){
      return this.$page.allStrapiGeneral.edges[0].node
    }
  }
}
</script>

<style>

</style>
