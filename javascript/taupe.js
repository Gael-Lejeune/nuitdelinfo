class Taupe{
    constructor(numTrou, triste)
    {
        this.x = posTrous[numTrou][0] - wTrou/2;
        this.y = posTrous[numTrou][1] - hTrou*2;
        this.dessinerTaupe(triste);
    }

    dessinerTaupe(triste)
    {
        if(triste)
        {
            contexte.drawImage(imgTaupeTriste, this.x, this.y);
        }
        else
        {
            canvas.addEventListener('click', clickTaupe, false);
            contexte.drawImage(imgTaupe, this.x, this.y);
        }
        sleep(10);
    }

    toucheTaupe()
    {
        if(sourisX > this.x &&
            sourisX < this.x+wTaupe &&
            sourisY > this.y &&
            sourisY < this.y+hTaupe)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}