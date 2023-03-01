#version 430 core
out vec4 FragColor;

in vec2 TexCoords;

layout(binding = 0) uniform sampler2D Texture;

void main() {
#if 1
	FragColor = vec4(texture(Texture, TexCoords).rgb, 1.0);
#else
	FragColor = vec4(1, 0, 0, 1);
#endif
}