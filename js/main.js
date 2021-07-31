var app = new Vue({
  el: '#subheader',
  data: {
    seen: document.documentElement.clientWidth <= 980 ? false:true
  },
  methods: {
    toggleDrop: function () {
      if(document.documentElement.clientWidth <= 980){
        this.seen = !this.seen
      }else{
        this.seen = true
      }
    },
    handleResize (event) {
      if(document.documentElement.clientWidth > 980){
        this.seen = true
      }else{
        this.seen = false
      }
    }
  },
  created: function (){
    window.addEventListener('resize', this.handleResize)
  },
  destroyed: function (){
    window.removeEventListener('resize', this.handleResize)
  }
})