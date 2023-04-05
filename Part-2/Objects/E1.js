function StopWatch()
{
    let startTime, endTime, running, duration=0;

    this.start = () =>
    {
        if(running)
        {
            throw new Error('Already running');
        }
        startTime=new Date();
        running=true;
    }

    this.stop = () =>
    {
        if(!running)
        {
            throw new Error('It is not running already!');
        }
        endTime=new Date();
        running=false;

        const seconds = (endTime.getTime()-startTime.getTime())/1000;
        duration+=seconds;
    }

    this.reset = () =>

    {
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    }

    Object.defineProperty(this,'duration',
    {

  
    get: function ()
    {
     return duration;
    }
});

}


const sw = new StopWatch();

sw.start();
sw.stop();
console.log(sw.duration);