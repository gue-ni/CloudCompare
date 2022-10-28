#version 430 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D Texture;

void main() {
	FragColor = vec4(texture(Texture, TexCoords).rgb, 1.0);

	//FragColor = vec4(TexCoords.x, TexCoords.y, 0.0 , 1.0);

	//float lerpValue = gl_FragCoord.y / 500.0f;
    //FragColor = mix(vec4(1.0f, 1.0f, 1.0f, 1.0f), vec4(0.2f, 0.2f, 0.2f, 1.0f), lerpValue);
}