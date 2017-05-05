function soupENH_initReplaceDefaultAvatars()
{
    var avatars = document.getElementsByClassName('photo');
	for (var i = 0; i < avatars.length; ++i) 
	{
		var avatar = avatars[i];
		if(	typeof(avatar.naturalWidth) !== 'undefined' 
			&& avatar.naturalWidth === 0 
			|| avatar.src.includes('default_avatar'))
		{  
			avatar.src = 'https://api.adorable.io/avatars/'+avatar.height+'/'+avatar.title+'.png';
		}
	}
}