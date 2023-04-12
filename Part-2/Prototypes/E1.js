function StopWatch()
{
   let startTime,endTime,running, duration=0;
   
    Object.defineProperty(this,'duration',
    {

  
    get: function ()
    {
     return duration;
    },
    set: function(value)
    {
     duration=value;
    }
});

Object.defineProperty(this,'startTime',
{


get: function ()
{
 return startTime;
}
});

}
Object.defineProperty(this,'endTime',
{


get: function ()
{
 return endTime;
}
});

Object.defineProperty(this,'running',
{


get: function ()
{
 return running;
}
});

StopWatch.prototype.start = () =>
{
    if(this.running)
    {
        throw new Error('Already running');
    }
    this.startTime=new Date();
    this.running=true;
}

StopWatch.prototype.stop = () =>
{
    if(!this.running)
    {
        throw new Error('It is not running already!');
    }
    this.endTime=new Date();
    this.running=false;

    const seconds = (endTime.getTime()-startTime.getTime())/1000;
    this.duration+=seconds;
}

StopWatch.prototype.reset = () =>

{
    this.startTime=null;
    this.endTime=null;
    this.running=false;
    this.duration=0;
}

const sw = new StopWatch();

sw.start();
sw.stop();
console.log(sw.duration);

// an example of the saying - Premature optimization is the root of all evils!
// the principle of abstraction violated here, there wasn't any need to shify methods to prototypes as thsi would cause unnecessary issues due to the exposure of duration for example, making the stop watch behave unexpectedly.
