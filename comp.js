var a=document.getElementById("c"),h=a.getContext("2d"),k=70;a.width=500;a.height=500;a.style.border="1px dotted black";t("Click to start");function t(c){h.font="30px s";h.fillText(c,k,k)}
a.onclick=function(){var c=75,f=250,l=1,d=4,u=0,o=250,q=k,v=setInterval(function(){h.clearRect(0,0,500,500);h.beginPath();h.arc(c,f,10,0,Math.PI*2,true);h.closePath();h.fill();var b=o;h.beginPath();h.rect(b,491,q,9);h.closePath();h.fill();for(i=0;i<9;i++)for(j=0;j<9;j++)if(m[i][j]){b=j*(r+g)+g;var n=i*(s+g)+g,e=r,p=s;h.beginPath();h.rect(b,n,e,p);h.closePath();h.fill()}b=s+g;e=r+g;p=Math.floor;n=p(f/b);e=p(c/e);if(f<9*b&&n>=0&&e>=0&&m[n][e]==1){d=-d;m[n][e]=0;u++}if(c+l>500||c+l<0)l=-l;if(f+d<0)d=
-d;else if(f+d>500)if(c>o&&c<o+q)d=-d;else{clearInterval(v);h.clearRect(0,0,500,500);t("Game Over");h.fillText("Score: "+u,k,99);h.fillText("Click to start",k,175)}c+=l;f+=d},9),r=500/9-1,s=15,g=1,m=[];for(i=0;i<9;i++){m[i]=[];for(j=0;j<9;j++)m[i][j]=1}document.onmousemove=function(b){if(b.pageX>0&&b.pageX<500)o=b.pageX-0-q/2}};