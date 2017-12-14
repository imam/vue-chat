<template>
  <div class="message message-personal new">
    {{msg}}
    <template v-if="meta">
      <div class="timestamp">{{meta.hour}}:{{meta.minute}}</div>
      <div v-if="meta.delivered" class="checkmark-sent-delivered"><span v-html="'&check;'"></span></div>
      <div v-if="meta.read" class="checkmark-read"><span v-html="'&check;'"></span></div>
    </template>
  </div> 
</template>

<script>
  export default{
    props: ['msg', 'meta']
  }
</script>

<style lang="scss">

@mixin center {
  position: relative;
/*  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);*/
}

@mixin ball {
  @include center;
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
/*  background: rgba(255, 255, 255, .5);*/
  background:#888;
  z-index: 2;
  margin-top: 4px;
  animation: ball .45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
}


 .message {
    clear: both;
    float: left;
    padding: 6px 10px 7px;
    -webkit-border-radius: 20px 20px 20px 0;
    -moz-border-radius: 20px 20px 20px 0;
    border-radius: 20px 20px 20px 0; 
    background: #eee; /*rgba(0, 0, 0, 0.1);*/
    margin: 8px 0;
    font-size: 14px;
    line-height: 1.4;
    margin-left: 35px;
    position: relative;
    border:1px solid #ccc;
    /*text-shadow: 0 1px 1px rgba(0, 0, 0, .2);*/
    .timestamp {
      position: absolute;
      bottom: -15px;
      font-size: 10px;
      color: #555;
       right:30px;
      /* color: rgba(255, 255, 255, .7);*/
      
    }
    .checkmark-sent-delivered {
      position: absolute;
      bottom: -15px;
     right: 10px;
      font-size:12px;
      color:#999;
    }
    .checkmark-read {
      color:blue;
       position: absolute;
      bottom: -15px;
     right: 16px;
      font-size:12px;
    }
    &::before {
    /*  content: '';
      position: absolute;
      bottom: -6px;
      border-top: 6px solid rgba(0, 0, 0, 0.1);
      left: 0;
      border-right: 7px solid transparent;*/
    }
    .avatar {
      position: absolute;
      z-index: 1;
      bottom: -15px;
      left: -35px;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
      border-radius: 30px;
      width: 30px;
      height: 30px;
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: 2px solid rgba(255, 255, 255, 0.5);
      img {
        width: 100%;
        height: auto;
      }
    }
    &.message-personal {
      float: right;
      text-align: right;
/*      background: linear-gradient(120deg, #ddd, #eee);*/
      background:#fff;
      border:1px solid #ccc /*#4A90E2*/;
      -webkit-border-radius: 20px 20px 0 20px;
      -moz-border-radius: 20px 20px 0 20px;
      border-radius: 20px 20px 0 20px;
    
      &::before {
        
      /*
          content:"";
      border-color:#4A90E2 transparent;
        width:0;
        border-style:solid;*/
        /*
        left: auto;
        right: 0;
        border-right: none;
       border-left: 8px solid transparent;
        border-top: 9px solid #fff;
        
        bottom: -8px;*/
      }
      &:last-child {
        margin-bottom: 30px;
      }
       
    }
    &.new {
      transform: scale(0);
      transform-origin: 0 0;
      animation: bounce 500ms linear both;
    }
    &.loading {
      &::before {
        @include ball;
        border: none;
        animation-delay: .15s;
      }
      & span {
        display: block;
        font-size: 0;
        width: 20px;
        height: 10px;
        position: relative;
        &::before {
          @include ball;
          margin-left: -7px;
        }
        &::after {
          @include ball;
          margin-left: 7px;
          animation-delay: .3s;
        }
      }
    }
  } 
</style>