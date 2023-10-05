# Test PYIMM, create fractal mandelbrot
import pyimm
from math import*
from time import*

def fractal(Img, max_iterations, Interval_x = ( -3.5, 1.5 ), Interval_y = ( -1.5, 1.5 ), m=400, n=400, F_color=None ):
	percent_pixel = 0.0
	nPixel =float(m*n)
	color = pyimm.RGB()
	dk = 120
	#if F_color==None: F_color = [lambda i: i*sin(i)  + cos(i), lambda i: i*cos(i) + i, lambda i: cos(i) + 1 + i**5]
	F_color = [ lambda i: i, lambda i: i, lambda i: i]

	alfa = float(n)/float(m)
	#a,b = alfa*(-2.5), alfa*1.0 #interval x
	#c,d = alfa*(-1.5),alfa*1.5 #iterval y
	
	#a, b = alfa*(-3.5), alfa*1.5 #interval x
	#c, d = alfa*(-2.0), alfa*2.0 #interval y

	a, b = alfa*Interval_x[0], alfa*Interval_x[1] #interval x
	c, d = alfa*Interval_y[0], alfa*Interval_y[1] #interval y


	#Pixel size resolution.
	delta_x, delta_y = ( abs( a-b ) )/float( n ), ( abs( c-d ) )/float( m )

	F = lambda i,j: [i*delta_x,j*delta_y] #scale i,j

	print( 'Draw...')
	x_c, y_c = 0,0
	k,l=0.0,0.0
	print( '[delta_x,delta_y]', [delta_x, delta_y] )
	sleep(5)
	for i in range(m):
		k = k + 1.0
		y_c = i*delta_y + c
		for j in range(n):
			l = l + 1.0
			percent_pixel =  100.0*((k+l)/nPixel)
			#print('Percent calculated...',  percent_pixel,' %')

			x_c = j*delta_x + a



			x,y=0,0
			iteration = 0

			while(x*x + y*y < 4 and iteration < max_iterations):
				xtemp = x*x - y*y + x_c
				y = 2*x*y + y_c

				x = xtemp
				iteration = iteration + 1
			#iteration = int(log(sqrt(x*x+y*y))/2**iteration)

			color.r = int( F_color[0](iteration) )
			color.g = int( F_color[1](iteration) )
			color.b = int( F_color[2](iteration) )

			#color.centralizergb()
			color.scaledRGB(0, 100)

			Img[i][j].r = color.r
			Img[i][j].g = color.g
			Img[i][j].b = color.b

	return Img
	
def fractal2( Img, max_iterations, Interval_x = ( -3.5, 1.5 ), Interval_y = ( -1.5, 1.5 ), m=500, n=500 ):
    
	percent_pixel = 0.0
	nPixel = float(m*n)
	color = pyimm.RGB()

	a, b = Interval_x[0], Interval_x[1]
	c, d = Interval_y[0], Interval_y[1]

	delta_x, delta_y = ( abs( a-b ) )/float( n ), ( abs( c-d ) )/float( m )

	x_c, y_c = 0, 0
	k, l = 0.0, 0.0

	print(f'[ delta_x, delta_y ] = [ {delta_x}, {delta_y}]')

	for i in range(m):
		k = k + 1.0
		y_c = i*delta_y + c

		for j in range(n):
			l = l + 1.0

			x_c = j*delta_x + a

			x, y = 0.0, 0.0
			iteration = 0

			while ( iteration <= max_iterations ):
				if ( x*x + y*y >= 4) :
					Img[i][j].r = 255
					Img[i][j].g = 255
					Img[i][j].b = 255
					break
				
				
				#Img[i][j].r, Img[i][j].g, Img[i][j].b = 0, 0, 0

				
				xtemp = x*x - y*y + x_c
				y = 2*x*y + y_c

				x = xtemp
				iteration = iteration + 1


	
	return Img

im = pyimm.MatrixImage(width=500, height=500, color='3')
p = pyimm.PPM(color='3')

#out_img = fractal(im, 200, Interval_x=(0.0, 0.5), Interval_y=( 0.0, 0.5), m=500, n=500, F_color=None)
#out_img = fractal2(im, 200, Interval_x=( 0.0, 0.5), Interval_y=( 0.0, 0.5), m=500, n=500)

#p.save(Img = out_img, filename='fractalbw.ppm')


i = 1
while i <= 100:
	print(f'Frame {i}')
	out_img = fractal2(im, i, Interval_x=   (0.0, 0.5 ) , Interval_y= ( 0.0, 0.5 ) , m=500, n=500)
	p.save(Img=out_img, filename=f"output/fractal-{i}.ppm")	
	i += 1

#i = 1
#while i <= 100:
#	out_img = fractal(im, i, 500,500, None)
#	p.save(Img=out_img, filename=f"output/fractal-{i}.ppm")
#	print(f'Fame {i}')
#	i += 1
