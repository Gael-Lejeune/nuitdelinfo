class Trou{
    constructor(numTrou)
    {
        this.x = posTrous[numTrou][0];
        this.y = posTrous[numTrou][1];
        this.dessinerTrou();
    }

    dessinerTrou()
    {
        contexte.beginPath();
        contexte.ellipse(this.x, this.y, wTrou/2, hTrou/2, 0, 0, 2 * Math.PI);
        contexte.fillStyle="#715337";
        contexte.fill();
        contexte.stroke();
    }
}