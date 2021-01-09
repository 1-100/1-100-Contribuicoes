import math

CANVAS = 500
BEADS = 9
ROWS = 3
BEADWIDTH = CANVAS / 10
BEADHEIGHT = CANVAS / ROWS

for step in range(1, 101):
    newPage(CANVAS, CANVAS)
    fill(0)
    rect(0, 0, CANVAS, CANVAS)
    fill(1)
    translate(CANVAS - BEADWIDTH, 0)
    
    for row in range(ROWS):
        divisor = 1 if row == 0 else 10 ** row
        digit = math.floor(step / divisor) % 10
        
        for bead in range(BEADS):
            offset = BEADWIDTH if bead < digit else 0
            
            with savedState():
                translate(-bead * BEADWIDTH + offset, BEADHEIGHT * row)
                polygon((0, BEADHEIGHT / 2), (-BEADWIDTH / 2, 0), (-BEADWIDTH, BEADHEIGHT / 2), (-BEADWIDTH / 2, BEADHEIGHT))
    
    saveImage("~/Desktop/abacus/" + str(step) + ".jpg")