#version 450 core
out vec4 FragColor;

varying vec4 color;

//varying vec2 uvs;
//uniform sampler2D Tex;


void main()
{
	//FragColor = vec4(0.0, 1.0, 0.0, 1.0);
	FragColor = color;
	//FragColor = texture(Tex, uvs);
}


