//var br="<br>";
var br="\r\n";

var cliente_id=[];
var pedido_id=[];
var funcionario_id=[];
var dependente_id=[];
var entrega_id=[];
var coleta_id=[];
var frota_id=[];
var caminhao_id=[];
var furgao_id=[];
var bau_id=[];
var carroceria_id=[];
var ajudante_id=[];
var motorista_id=[];
var motoristaleve_id=[];
var motoristapesado_id=[];
var dirigecaminhao_id=[];
var dirigefurgao_id=[];

var names=[
	'Ângela',
	'Ãngelo',
	'Átila',
	'Abraão',
	'Abílio',
	'Adalto',
	'Ademir',
	'Alfonso',
	'Alberto',
	'Augusto',
	'Adelaide',
	'Adriano',
	'Adriana',
	'Agostinho',
	'Agnaldo',
	'Agnalda',
	'Alda',
	'Alan',
	'Allan',
	'Ana',
	'Ana Paula',
	'Ana Maria',
	'Ana Cláudia',
	'Amanda',
	'Anita',
	'Adalberto',
	'Alexandre',
	'Alfredo',
	'Aline',
	'Amadeu',
	'André',
	'Andréia',
	'Anacleto',
	'Antônio',
	'Araci',
	'Arnaldo',
	'Augusta',
	'Armando',
	'Arlindo',
	'Abigail',
	'Bianca',
	'Bernardo',
	'Bartolomeu',
	'Beatriz',
	'Belmifer',
	'Benedita',
	'Benedito',
	'Brenda',
	'Bruna',
	'Bruno',
	'Carlos',
	'Carla',
	'Cláudio',
	'Cláudia',
	'Caetano',
	'Camila',
	'Cecília',
	'Célio',
	'Célia',
	'Carina',
	'Celso',
	'Clara',
	'Conrado',
	'Cristiano',
	'Cristiane',
	'Cristina',
	'Cristóvão',
	'Cícero',
	'Cícera',
	'Daniel',
	'Dunirce',
	'Débora',
	'Diego',
	'Danilo',
	'David',
	'Diana',
	'Dora',
	'Diogo',
	'Daniela',
	'Dirceu',
	'Eliseu',
	'Edgar',
	'Edson',
	'Éden',
	'Ednei',
	'Élton',
	'Eduardo',
	'Eurípedes',
	'Eliana',
	'Elvira',
	'Elsa',
	'Emília',
	'Emílio',
	'Ernesto',
	'Estevão',
	'Eugênio',
	'Eusébio',
	'Eliane',
	'Erasmo',
	'Fernando',
	'Fernanda',
	'Fábio',
	'Fabiano',
	'Fabiana',
	'Fabrício',
	'Fausto',
	'Guilherme',
	'Gabriel',
	'Gabriela',
	'Gustavo',
	'Hector',
	'Henrique',
	'Igor',
	'Ivone',
	'Iuri',
	'Jair',
	'Jandira',
	'Janaína',
	'Jeremias',
	'John',
	'Joaquim',
	'Jaqueline',
	'João',
	'Jorge',
	'José',
	'Júlio',
	'Júlia',
	'Juliano',
	'Juliana',
	'Juliane',
	'Jussara',
	'Jubileu',
	'Kléber',
	'Laura',
	'Laís',
	'Lívia',
	'Letícia',
	'Lúcia',
	'Lúcio',
	'Lucas',
	'Leandro',
	'Leonardo',
	'Maria',
	'Maria Laura',
	'Isabella',
	'Isadora',
	'Maria Cláudia',
	'Mariana',
	'Marília',
	'Mário',
	'Márcia',
	'Marcos',
	'Matias',
	'Mateus',
	'Maurício',
	'Miranda',
	'Milena',
	'Murilo',
	'Mayara',
	'Natália',
	'Nayara',
	'Norberto',
	'Otávio',
	'Olavo',
	'Odete',
	'Paulo',
	'Paula',
	'Patrícia',
	'Pedro',
	'Pedro Augusto',
	'Raíssa',
	'Ricardo',
	'Roberto',
	'Roberta',
	'Rodrigo',
	'Rita',
	'Reinaldo',
	'Renan',
	'Renato',
	'Raul',
	'Rômulo',
	'Saulo',
	'Soraia',
	'Sabrina',
	'Sérgio',
	'Serafim',
	'Sílvio',
	'Sílvia',
	'Silvana',
	'Túlio',
	'Tatiana',
	'Talita',
	'Tiago',
	'Timóteo',
	'Tibério',
	'Ulisses',
	'Ubirajara',
	'Valéria',
	'Vitória',
	'Vitor',
	'Verônica',
	'Vladmir',
	'Vanessa',
	'Valdete',
	'Vânia',
	'Wellington',
	'Wilson',
	'Yuri',
	'Yasmin',
	'Zuleica',
	'Pedro Henrique',
	'Vitor Hugo',
	'Luiz Augusto',
	'Luísa',
	'Carlos Alberto',
	'Clóvis'
];

var surnames=[
	'Alves',
	'Antunes',
	'Azevedo',
	'Almeida',
	'Almeida Pereira',
	'Barbosa',
	'Batalha',
	'Batista',
	'Batista Pires',
	'Beltrão',
	'Brandão',
	'Conde',
	'Costa',
	'Covas',
	'Cruz',
	'Castelo Branco',
	'Ferreira',
	'Fonseca',
	'Gomez Fonseca',
	'Moreno',
	'Silveira Costa',
	'Oliveira Cunha',
	'Fernandes',
	'Fernandes Ribeiro',
	'Gonçalves',
	'Gonçalo',
	'Gomez',
	'Galhardo',
	'Meirelles',
	'Martins',
	'Martins Prado',
	'Mello',
	'Moura',
	'Maciel',
	'Martinelli',
	'Nogueira',
	'Oliveira',
	'Orestes',
	'Prado',
	'Oliveira Prado',
	'Prado dos Santos',
	'Prado Souza',
	'Pereira',
	'Paulino',
	'Pinto',
	'Nóbrega',
	'Peixoto',
	'de Paula Barbosa',
	'Jucá',
	'Franco',
	'Britto',
	'Giménez',
	'Saldanha',
	'Tristán',
	'Araújo',
	'Pequeno',
	'Pinheiro',
	'Pinheiro Gonçalves',
	'Pinheiro Peixoto',
	'Gonçalves Pinheiro',
	'Grande',
	'Assunção',
	'Camacho',
	'Fontoura',
	'Quintela',
	'Siqueira',
	'Silva',
	'de Sá',
	'da Costa',
	'Silviano',
	'Leitão',
	'do Porto',
	'Cunha',
	'Souza',
	'Velasquez',
	'Vilaça',
	'Videira',
	'Xavier',
	'Xavier Costa',
	'Francisco Araújo',
	'Coutinho',
	'Rebouças',
	'Tavares',
	'Tavares da Costa',
	'Pedroso',
	'Macedo',
	'Soares',
	'Dias',
	'Soares Diaz',
	'da Mata',
	'Múfalo',
	'Gutenberg',
	'Gutenberg Faria',
	'Faria',
	'Faria Prado',
	'Vasconcelos',
	'Vasconcelos Tavares',
	'de Jesus',

	'Bittencourt',
	'Antunes Fonseca',
	'Villalobos',
	'Villalobos Martins',
	'Villalobos Fonseca',
	'Villalobos Camacho',
	'Villalobos Assunção',
	'Ferreira Macedo',
	'Ferreira Tavares',
	'Simão',
	'Simão Moraes',
	'Simão Barbosa',
	'Simão Rezende',
	'Rezende',
	'Rezende Moreira',
	'Antunes Moura',
	'Rezende Moura',
	'Rezende Bittencourt',
	'Rezende Oliveira',
	'Rezende Oliveira dos Santos',
	'Moreira',
	'Moreira Barbosa',
	'Moreira Santos',
	'Moreira Azevedo',
	'Moreira Fagundes',
	'Moreira Spinoza',
	'Spinoza',
	'Spinoza Ferreira',
	'Spinoza Prado',
	'Spinoza Fonseca',
	'Fagundes',
	'Fagundes Silva',
	'Fagundes Macedo',
	'Azevedo Fagundes',
	'Simão Barbosa',
	'Simão Azevedo',
	'Simão Spósito',
	'Spósito',
	'Souza e Silva',
	'Rosa',
	'Bandeira',
	'Bandeira Vilaça',
	'Bandeira Cruz',
	'Cruz',
	'Quinta',
	'Castanho',
	'Castanho Torquato',
	'Castanho Azevedo',
	'Torquato',
	'Machado',
	'Torquato Machado',
	'Torquato Pereira',
	'Costa Torquato',
	'Campos',
	'Campos Martinelli',
	'Oliveira Campos',
	'Mercadante',
	'Pereira da Mata',
	'de Matos',
	'de Matos Souza',
	'de Matos Pereira',
	'Torquato Cruz',
	'Machado Souza',
	'Pires',
	'Assis',
	'Assis Ribeiro',
	'Assis Machado',
	'Assis Macedo',
	'Ribeiro',
	'Marinho'
];

var streets=[
	'Rua Ulderico Giulietti',
	'Rua Alto do Bonfim',
	'Avenida Dom Pedro II', 
	'Estrada Pedra Balão',
	'Rua José Pereira de Aquino',
	'Rua Doutor Eduardo de Souza Aranha',
	'Rua Terceiro-Sargento Euber Queiroz Júnior',
	'Rua Diana Ortiz',
	'Rua do Patriarca',
	'Rua Francisco Poliza',
	'Rua Ulderico Giulietti',
	'Rua Antonio Agu', 
	'Rua Fernando Veiga',
	'Rua Felipe Pinel',
	'Rua Claudi Novaes', 
	'Rua Beto Dandini',
	'Rua José Pereira de Anchieta',
	'Rua Barão de Mauá',
	'Rua João de Barros',
	'Avenida Paulista',
	'Avenida Francisco Lopes',
	'Rua José Firmino',
	'Rua da Conceição',
	'Rua Dário Pereira',
	'Rua Ferraz de Vasconcelos',
	'Rua Francisco Lopes',
	'Rua Otto Unger',
	'Avenida Brasil',
	'Avenida André Azevedo',
	'Rua Benjamin Constant',
	'Rua Francisco Ferreira Mello',
	'Rua Eliseu Epaminondas',
	'Rua Cruzeiro do Sul'
];

var neighbors=[
	'Penha',
	'Vila Mariana',
	'Centro',
	'Itaim Paulista',
	'Liberdade',
	'Vila Madalena',
	'Lapa',
	'Pirituba',
	'Osasco',
	'Mooca',
	'Casa Verde',
	'Ermelino Matarazzo'
];

var cities=[
	'São Paulo',
	'Jundiaí',
	'Guarulhos',
	'Itaquaquecetuba',
	'Mogi das Cruzes',
	'Santos',
	'Santo André',
	'São Bernardo',
	'São José dos Campos',
	'Diadema'
];

var providers=[
	'hotmail',
	'gmail',
	'yahoo',
	'outlook',
	'example'
];

var relatives=[
	'filho(a)',
	'irmã(o)',
	'pai(mãe)'
];

var letters=[
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];

var algarisms=[
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9'
];

var numAleatEntre=function(no1, no2){
	return Math.floor(Math.random()*no2+no1);
}

var numAleatEntreComZero=function(no1, no2){
	var x=Math.floor(Math.random()*no2+no1);
	x-=1;
	if(x<10)return "0"+x;
	return x;
}

var gerarPlaca=function(){
	var s='';
	s+=letters[numAleatEntre(0,letters.length-1)];
	s+=letters[numAleatEntre(0,letters.length-1)];
	s+=letters[numAleatEntre(0,letters.length-1)];
	s+='-';
	s+=algarisms[numAleatEntre(0,algarisms.length-1)];
	s+=algarisms[numAleatEntre(0,algarisms.length-1)];
	s+=algarisms[numAleatEntre(0,algarisms.length-1)];
	s+=algarisms[numAleatEntre(0,algarisms.length-1)];
	return s;
}

var normalizar=function(str) {
  	var string = str;
	var mapaAcentosHex 	= {
		a : /[\xE0-\xE6]/g,
		e : /[\xE8-\xEB]/g,
		i : /[\xEC-\xEF]/g,
		o : /[\xF2-\xF6]/g,
		u : /[\xF9-\xFC]/g,
		c : /\xE7/g,
		n : /\xF1/g,
		'_' : /\s/g
	};

	for ( var letra in mapaAcentosHex ) {
		string = string.replace( mapaAcentosHex[letra], letra );
	}

	return string;
}

var dataAleat=function(){
	var y=numAleatEntre(1, 56)+1960;
	var m=numAleatEntre(1,12);
	var d=1;
	if(m==2){
		d=numAleatEntre(1,28);
	}else if(m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){
		d=numAleatEntre(1,31);
	}else{
		d=numAleatEntre(1,30);
	}

	var dd=d.toString();
	if(d<10){
		dd='0'+d.toString();
	}

	var mm=m.toString();
	if(m<10){
		mm='0'+m.toString();
	}

	return dd+'-'+mm+'-'+y.toString();
}

var geraCliente=function(no, element){
	for(var i=0;i<no;i++){
		var nam=names[numAleatEntre(0,names.length-1)];
		var surn=surnames[numAleatEntre(0,surnames.length-1)];
		var email=normalizar(nam.toLowerCase())+"."+normalizar(surn.toLowerCase())+"@"+providers[numAleatEntre(0,providers.length-1)]+".com";

		element.append("INSERT INTO CLIENTE (id_cli, nome, sobrenome, rua, numero, cidade, email) VALUES ("
						+(i+1)+", "
						+"'"+nam+"', " 
						+"'"+surn+"', " 
						+"'"+streets[numAleatEntre(0,streets.length-1)]+"', "
						+numAleatEntre(1,1000)+", "
						+"'"+cities[numAleatEntre(0,cities.length-1)]+"', " 
						+"'"+email+"');");
		element.append(br+br);
		cliente_id.push(i+1);
	}
};

var geraPedido=function(no, element){
	for(var i=0;i<no;i++){
		element.append("INSERT INTO PEDIDO (id_ped, peso_ton, rua, numero, cidade, bairro, num_nf_ped, varlor_nf, id_cli) VALUES ("
						+(i+1)+", "
						+"'"+(numAleatEntre(10,100))+"0 kg' ,"
						+"'"+streets[numAleatEntre(0,streets.length-1)]+"', "
						+numAleatEntre(1,1000)+", " 
						+"'"+cities[numAleatEntre(0,cities.length-1)]+"', "
						+"'"+neighbors[numAleatEntre(0,neighbors.length-1)]+"', "
						+numAleatEntre(1,no)+", "
						+numAleatEntre(1,200)+"0.00, "
						+numAleatEntre(1,no)
						+" );");
		element.append(br+br);
		pedido_id.push(i+1);
	}
}

var geraFuncionario=function(no, element){
	for(var i=0;i<no;i++){
		element.append("INSERT INTO FUNCIONARIO (id_funcionario, nome, sobrenome, rua, numero, cidade, salario, data_admissao, MOTORISTA, AJUDANTE) VALUES ("
						+(i+1)+", "
						+"'"+names[numAleatEntre(0,names.length-1)]+"', " 
						+"'"+surnames[numAleatEntre(0,surnames.length-1)]+"', " 
						+"'"+streets[numAleatEntre(0,streets.length-1)]+"', "
						+numAleatEntre(1,1000)+", "
						+"'"+cities[numAleatEntre(0,cities.length-1)]+"', "
						+numAleatEntre(80,400)+"0.00, "
						+"to_date('"+dataAleat()+"', 'dd-mm-yyyy'), "
						+"'', "
						+"'' "
						+");");
		element.append(br+br);
		funcionario_id.push(i+1);
	}
}

var geraDependente=function(no, element){
	for(var i=0;i<no;i++){
		element.append("INSERT INTO DEPENDENTE (id_dependente, id_funcionario, nome, sobrenome, parentesco, data_nascimento) VALUES ("
		+(i+1)+", "
		+funcionario_id[numAleatEntre(1,funcionario_id.length-1)]+", "
		+"'"+names[numAleatEntre(0,names.length-1)]+"', "
		+"'"+surnames[numAleatEntre(0,surnames.length-1)]+"', "
		+"'"+relatives[numAleatEntre(0,relatives.length-1)]+"', "
		+"to_date('"+dataAleat()+"', 'dd-mm-yyyy')"
		+");");
		element.append(br+br);
		dependente_id.push(i+1);
	}
}

var geraEntrega=function(no, element){
	var limiar=0;
	if(pedido_id.length%2==0){
		limiar=pedido_id.length/2;
	}else{
		limiar=(pedido_id.length/2).trunc();
	}
	for(var i=0;i<limiar;i++){
		element.append("INSERT INTO ENTREGA (id_ped, data_entrega, horario_entrega, num_nf_entrega, id_vei) VALUES ("
			+(i+1)+", "
			+"to_date('"+dataAleat()+"', 'dd-mm-yyyy'), "
			+"'"+numAleatEntreComZero(1,24)+":"+numAleatEntreComZero(1,60)+" hs', "
			+numAleatEntre(1,no)+", "
			+numAleatEntre(1,no)+
			");");
		element.append(br+br);
		entrega_id.push(i+1);
	}
}

var geraColeta=function(no, element){
	var limiar=0;
	if(pedido_id.length%2==0){
		limiar=pedido_id.length/2;
	}else{
		limiar=(pedido_id.length/2).trunc();
	}
	for(var i=limiar;i<pedido_id.length;i++){
		element.append("INSERT INTO COLETA (id_ped, data_coleta, horario_coleta, num_nf_coleta, id_vei) VALUES ("
		+(i+1)+", "
		+"to_date('"+dataAleat()+"', 'dd-mm-yyyy'), "
		+"'"+numAleatEntreComZero(1,24)+":"+numAleatEntreComZero(1,60)+" hs', "
		+numAleatEntre(1,no)+", "
		+numAleatEntre(1,no)+
		");");
		element.append(br+br);
		coleta_id.push(i+1);
	}
}

var geraFrota=function(no, element){
	for(var i=0;i<no;i++){
		element.append("INSERT INTO FROTA (id_vei, placa, max_velo, FURGAO, CAMINHAO) VALUES ("
		+(i+1)+", "
		+"'"+gerarPlaca()+"', "
		+"'"+numAleatEntre(8,18)+"0 km/h ', "
		+numAleatEntre(1,no)+", "
		+numAleatEntre(1,no)+
		");");
		element.append(br+br);
		frota_id.push(i+1);
	}
}

var geraCaminhao=function(no, element){
	var limiar=0;
	if(frota_id.length%2==0){
		limiar=frota_id.length/2;
	}else{
		limiar=Math.trunc((frota_id.length/2));
	}
	alert(limiar);
	for(var i=0;i<limiar;i++){
		element.append("INSERT INTO CAMINHAO (id_vei, num_eixos, max_ton, tara_peso, peso_liquido, CARROCERIA, BAU) VALUES ("
		+(i+1)+", "
		+numAleatEntre(3,4)+", "
		+"'"+numAleatEntre(10,18)+" ton', "
		+"'"+numAleatEntre(8,12)+" ton', "
		+"'"+numAleatEntre(9,15)+" ton', "
		+numAleatEntre(1,no)+", "
		+numAleatEntre(1,no)
		+");");
		element.append(br+br);
		caminhao_id.push(i+1);
	}
}

var geraFurgao=function(no, element){
	var limiar=0;
	if(frota_id.length%2==0){
		limiar=frota_id.length/2;
	}else{
		limiar=(frota_id.length/2).trunc();
	}
	for(var i=limiar;i<frota_id.length;i++){
		element.append("INSERT INTO FURGAO (id_vei, num_portas, max_capacidade, max_itens) VALUES ("
			+(i+1)+", "
			+numAleatEntre(2,3)+", "
			+"'"+numAleatEntre(1,3)+" ton', "
			+numAleatEntre(10,15)+" );");
		element.append(br+br);
		furgao_id.push(i+1);
	}
}

var pedido_backup=[];
var funcionario_backup=[];

var geraBau=function(no, element){
	var limiar=0;
	if(caminhao_id.length%2==0){
		limiar=caminhao_id.length/2;
	}else{
		limiar=Math.trunc((caminhao_id.length/2));
	}

	var tam=pedido_backup.length-1;

	for(var i=0;i<limiar;i++){
		var x=numAleatEntre(0,tam);
		element.append("INSERT INTO BAU (id_vei, id_ped, metros_cub) VALUES ("
			+(i+1)+", "
			+pedido_backup[x]+", "
			+"'"+numAleatEntre(1,20)+"."+numAleatEntre(0,99)+" m3');");
		element.append(br+br);
		bau_id.push(i+1);

		pedido_backup.splice(x,1);
		tam--;
	}
}

var geraCarroceria=function(no, element){
	var limiar=0;
	if(caminhao_id.length%2==0){
		limiar=caminhao_id.length/2;
	}else{
		limiar=Math.trunc((caminhao_id.length/2));
	}

	var tam=pedido_backup.length-1;

	for(var i=limiar;i<caminhao_id.length;i++){
		var x=numAleatEntre(0,tam);
		element.append("INSERT INTO CARROCERIA (id_vei, id_ped, metros_quad) VALUES ("
			+(i+1)+", "
			+pedido_backup[x]+", "
			+"'"+numAleatEntre(1,20)+"."+numAleatEntre(0,99)+" m2');");
		element.append(br+br);
		carroceria_id.push(i+1);

		pedido_backup.splice(x,1);
		tam--;
	}
}

var geraAjudante=function(no, element){
	helpers=[
		'ajudante geral',
		'carregador'
	];

	var limiar=0;
	if(funcionario_id.length%2==0){
		limiar=funcionario_id.length/2;
	}else{
		limiar=Math.trunc(funcionario_id.length/2);
	}

	alert(limiar);

	for(var i=0;i<limiar;i++){
		element.append("INSERT INTO AJUDANTE (id_funcionario, tipo_ajudante) VALUES ( "
			+(i+1)+", "
			+"'"+helpers[Math.abs(Math.trunc((numAleatEntre(1,4)/2))-1)]+"');");
		element.append(br+br);
		ajudante_id.push(i+1);
	}
}

var geraMotorista=function(no, element){
	var limiar=0;
	if(funcionario_id.length%2==0){
		limiar=funcionario_id.length/2;
	}else{
		limiar=(funcionario_id.length/2).trunc();
	}
	for(var i=limiar;i<funcionario_id.length;i++){
		element.append("INSERT INTO MOTORISTA (id_funcionario, habilitacao_num, habilitacao_categoria, MOTORISTA_LEVE, MOTORISTA_PESADO) VALUES ("
		+(i+1)+", "
		+"'"+numAleatEntre(0,9)+""+numAleatEntre(0,9)+""+numAleatEntre(0,9)+""+numAleatEntre(0,9)+""+numAleatEntre(0,9)+""+numAleatEntre(0,9)+""+numAleatEntre(0,9)+""+numAleatEntre(0,9)+""+numAleatEntre(0,9)+""+numAleatEntre(0,9)+"', "
		+"'"+letters[numAleatEntre(0,4)]+"', "
		+numAleatEntre(1,no)+", "
		+numAleatEntre(1,no)
		+");");
		element.append(br+br);
		motorista_id.push(i+1);
	}
}

var geraMotoristaLeve=function(no, element){

	var limiar=0;
	if(motorista_id.length%2==0){
		limiar=motorista_id.length/2;
	}else{
		limiar=Math.trunc(motorista_id.length/2);
	}

	alert(limiar);

	//var tam=funcionario_backup.length-1;

	for(var i=0;i<limiar;i++){
		//alert('a');
		element.append("INSERT INTO MOTORISTA_LEVE (id_funcionario, tipo_veiculo_leve) VALUES ("
		+(i+1)+", "
		+"'furgão');");
		element.append(br+br);
		motoristaleve_id.push(i+1);
	}
}

var geraMotoristaPesado=function(no, element){
	var vehicle_heavy=[
		'baú',
		'',
		'carroceria',
		''
	];

	var limiar=0;
	if(motorista_id.length%2==0){
		limiar=motorista_id.length/2;
	}else{
		limiar=(motorista_id.length/2).trunc();
	}

	for(var i=limiar;i<motorista_id.length;i++){
		var x=Math.abs(Math.trunc((numAleatEntre(1,4)/2))-1);
		if(x==1){
			element.append("INSERT INTO MOTORISTA_PESADO (id_funcionario, tipo_veiculo_pesado1, tipo_veiculo_pesado2) VALUES ("
			+(i+1)+", "
			+"'"+vehicle_heavy[0]+"', "
			+"'"+vehicle_heavy[Math.abs(Math.trunc((numAleatEntre(1,4)/2))-1)+2]+"'"
			+");");
		}else{
			element.append("INSERT INTO MOTORISTA_PESADO (id_funcionario, tipo_veiculo_pesado1, tipo_veiculo_pesado2) VALUES ("
			+(i+1)+", "
			+"'"+vehicle_heavy[2]+"', "
			+"'"+vehicle_heavy[Math.abs(Math.trunc((numAleatEntre(1,4)/2))-1)]+"'"
			+");");
		}
		
		element.append(br+br);
		motoristapesado_id.push(i+1);
	}
}

var geraDirigeCaminhao=function(no, element){

	var caminhao_backup=caminhao_id.slice();
	var tam=caminhao_backup.length-1;

	for(var i=0;i<motoristapesado_id.length;i++){
		var x=numAleatEntre(0,tam);
		element.append("INSERT INTO dirige_caminhao (id_funcionario, id_vei) VALUES ("
			+motoristapesado_id[i]+", "
			+caminhao_backup[x]
			+");");
		element.append(br+br);
		caminhao_backup.splice(x,1);
		tam--;
	}
}

var geraDirigeFurgao=function(no, element){

	var furgao_backup=furgao_id.slice();
	var tam=furgao_backup.length-1;

	for(var i=0;i<motoristaleve_id.length;i++){
		var x=numAleatEntre(0,tam);
		element.append("INSERT INTO dirige_furgao (id_funcionario, id_vei) VALUES ("
			+motoristaleve_id[i]+", "
			+furgao_backup[x]
			+");");
		element.append(br+br);
		furgao_backup.splice(x,1);
		tam--;
	}
}

var geraAjudaCaminhao=function(no, element){

	var caminhao_backup=caminhao_id.slice();
	var tam=caminhao_backup.length-1;

	for(var i=0;i<ajudante_id.length;i++){
		var x=numAleatEntre(0,tam);
		element.append("INSERT INTO ajuda_caminhao (id_funcionario, id_vei) VALUES ("
			+ajudante_id[i]+", "
			+caminhao_backup[x]
			+");");
		element.append(br+br);
		caminhao_backup.splice(x,1);
		tam--;
	}
}


$('.gerar').on('submit', function(e){
	e.preventDefault();
	var quantidade=parseInt($('[name=row_no]').val());
	$('#generated-script').html('');
	geraCliente(quantidade, $('#generated-script'));
	geraFuncionario(quantidade, $('#generated-script'));
	geraDependente(quantidade, $('#generated-script'));	
	geraFrota(quantidade, $('#generated-script'));
	geraPedido(quantidade, $('#generated-script'));
	geraEntrega(quantidade, $('#generated-script'));
	geraColeta(quantidade, $('#generated-script'));
	geraCaminhao(quantidade, $('#generated-script'));
	geraFurgao(quantidade, $('#generated-script'));
	pedido_backup=pedido_id.slice();
	geraBau(quantidade, $('#generated-script'));
	geraCarroceria(quantidade, $('#generated-script'));
	geraAjudante(quantidade, $('#generated-script'));
	geraMotorista(quantidade, $('#generated-script'));
	geraMotoristaLeve(quantidade, $('#generated-script'));
	geraMotoristaPesado(quantidade, $('#generated-script'));
	geraDirigeCaminhao(quantidade, $('#generated-script'));
	geraDirigeFurgao(quantidade, $('#generated-script'));
	geraAjudaCaminhao(quantidade, $('#generated-script'));

});

$('.selecionar-script').on('click', function(){
	$('#generated-script').select();
});