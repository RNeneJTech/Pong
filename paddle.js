class paddle
{
    constructor(pwidth, pheight, xcenter, ycenter)
    {
        this.width = pwidth;
        this.height = pheight;
        this.xcenter = xcenter - pwidth / 2;
        this.ycenter = ycenter - pheight / 2;
    }

    get get_x_center() { return this.xcenter - pwidth / 2;}
    get get_y_center() { return this.ycenter - pheight / 2;}
    set set_x_center(xcenter) { return this.xcenter - this.width / 2;}
    set set_y_center(ycenter) { return this.ycenter - this.height / 2;}

    get get_width() { return this.width;}
    get get_height() { return this.height;}
    set set_width(pwidth) { this.width = pwidth;}
    set set_height(pheight) { this.height = pheight;}

    collides(ball)
    {
        if (ball.get_x_center() - this.x_center < ball.get_radius()
            && ball.get_y_center() - this.ycenter < ball.get_radius())
            return true;
        return false;
    }

    draw()
    {
        rect(this.xcenter, this.ycenter, this.width, this.height);
    }
}